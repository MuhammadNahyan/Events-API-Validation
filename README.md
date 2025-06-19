# Events API Validation

A Node.js/Express REST API for managing events, showcasing robust input validation and consistent error responses.

## Features

- CRUD operations for events
- Joi-powered input validation
- Mongoose schema/model with DB-side validation
- Custom error handler for clear, consistent messages
- Comprehensive tests with Jest & Supertest
- Postman collection with valid and invalid sample requests

## Event Model & Validation

| Field       | Type      | Validation                             |
|-------------|-----------|----------------------------------------|
| title       | string    | required, min 3 chars, max 100         |
| date        | string    | required, ISO date, must be in future  |
| location    | string    | required, min 3 chars                  |
| description | string    | optional, max 500                      |
| attendees   | array     | optional, each a valid email address    |

## Example Error Response

```json
{
  "error": "ValidationError",
  "message": "\"date\" must be a valid ISO date in the future"
}
```

## Getting Started

```bash
npm install
npm start
```

> For testing, ensure MongoDB is running locally or set `MONGODB_URI` in your environment.

## Testing

- Run tests: `npm test`
- Import and use `postman_collection.json` in Postman

## Endpoints

| Method | Endpoint     | Purpose         |
|--------|--------------|-----------------|
| POST   | /events      | Create event    |
| GET    | /events      | List events     |
| GET    | /events/:id  | Get event       |
| PUT    | /events/:id  | Update event    |
| DELETE | /events/:id  | Delete event    |

---