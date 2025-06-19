const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Event = require('../models/Event');

beforeAll(async () => {
  // Wait for mongoose to connect (if needed)
  if (mongoose.connection.readyState !== 1) {
    await new Promise(resolve => mongoose.connection.once('open', resolve));
  }
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Event.deleteMany();
});

// beforeAll(async () => {
//   await mongoose.connect('mongodb://localhost:27017/events-api-test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
// });

// afterAll(async () => {
//   await mongoose.connection.db.dropDatabase();
//   await mongoose.disconnect();
// });

// beforeEach(async () => {
//   await Event.deleteMany();
// });

describe('Events API', () => {
  it('should create an event with valid data', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        title: 'Conference',
        date: '2099-12-31T12:00:00.000Z',
        location: 'Berlin',
        description: 'Annual tech conference',
        attendees: ['alice@example.com', 'bob@example.com']
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe('Conference');
  });

  it('should return validation error for missing title', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        date: '2099-12-31T12:00:00.000Z',
        location: 'Berlin'
      });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('ValidationError');
    expect(response.body.message).toMatch(/"title" is required/);
  });

  it('should return 404 for non-existent event', async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const response = await request(app).get(`/events/${fakeId}`);
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe('NotFound');
  });
});