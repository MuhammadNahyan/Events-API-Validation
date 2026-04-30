# Events API Validation

A Node.js and Express REST API for managing events, focused on robust input validation and clean error handling.

---

## Features

- Full CRUD operations for events
- Request validation using Joi
- Database-level validation using Mongoose
- Custom validation (future event dates)
- Centralized error handling middleware
- Postman collection for manual API testing

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi

---

## Event Model & Validation

| Field        | Type   | Validation                              |
|--------------|--------|------------------------------------------|
| title        | string | required, min 3 chars, max 100          |
| date         | string | required, ISO format, must be future    |
| location     | string | required, min 3 chars                   |
| description  | string | optional, max 500                      |
| attendees    | array  | optional, valid email addresses         |

---

## Example Error Response

```json
{
  "error": "ValidationError",
  "message": "\"date\" must be a valid ISO date in the future"
}
```

## Setup & Installation

```bash
npm install
npm start
```

## Environment Variables

> Create a .env file:
MONGO_URI=mongodb://127.0.0.1:27017/events-api
PORT=4200`
 Ensure MongoDB is running locally or set `MONGODB_URI` in your environment.


## API Endpoints

| Method | Endpoint     | Purpose         |
|--------|--------------|-----------------|
| POST   | /events      | Create event    |
| GET    | /events      | Get all events     |
| GET    | /events/:id  | Get event       |
| PUT    | /events/:id  | Update event    |
| DELETE | /events/:id  | Delete event    |

---

##  API Testing

- Import and use `postman_collection.json` in Postman to test the API.
- Use sample requests for both valid and invalid cases
- Verify validation and error responses

##  Project Purposes

- Layered validation(Joi + Mongoose)
- Clean API Architecture
- Centralized error handling
- Manual API testing using Postman
