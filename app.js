const express = require("express");
const eventRoutes = require("./routes/events.js");
const errorHandler = require("./middleware/errorHandler.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/events', eventRoutes);
app.use(errorHandler);

module.exports = app;