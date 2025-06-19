const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 100 },
  date: { type: Date, required: true },
  location: { type: String, required: true, minlength: 3 },
  description: { type: String, maxlength: 500 },
  attendees: [{ type: String, match: /.+@.+\..+/ }]
});

// Custom validator to ensure date is in the future
eventSchema.path('date').validate(function(value) {
  return value > new Date();
}, 'Event date must be in the future.');

module.exports = mongoose.model('Event', eventSchema);