const dotenv = require("dotenv");
dotenv.config({ path: '.env.test' });

const mongoose = require('mongoose');
const { before, after, afterEach } = require('node:test');
const Event = require('../models/Event');

before(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    family: 4
  });
});

afterEach(async () => {
  await Event.deleteMany();
});

after(async () => {
  await mongoose.connection.close();
});
