// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   title: { type: String, required: true, minlength: 4, maxlength: 100 },
//   date: { type: Date, required: true },
//   location: { type: String, required: true, minlength: 4 },
//   description: { type: String, maxlength: 500 },
//   attendees: [{ type: String, match: /.+@.+\..+/ }]
// });

// // Custom validator to ensure date is in the future
// eventSchema.path('date').validate(function(value) {
//   return value > new Date();
// }, 'Event date must be in the future.');

// module.exports = mongoose.model('Event', eventSchema);













const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    minlength: 4,
    required: true
  },
  description: {
    type: String,
    maxlength: 500
  },
  attendees: [{
    type: String,
    match: '/.+@.+\..+/'
  }]
})

eventSchema.path().validate(function (val) {
  return val > new Date();
}, 'Event date must be in the future');

module.exports = mongoose.model("Event", eventSchema);