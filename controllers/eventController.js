const Event = require("../models/Event.js");

exports.createEvent = async (req, res, next) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();
    res.status(201).json({
      message: "Event created successfully",
      event
    });
  } catch (err) {
    next(err);
  }
}

exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    next(err)
  }
}

exports.getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);

    if (!event) return res.status(404).json("Not found");

    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
}

exports.updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(id,
      updates,
      { new: true, runValidators: true }
    )

    if (!updatedEvent) return res.status(200).json(updatedEvent);

    res.status(200).json({
      message: "Event updated successfully",
      updatedEvent
    })
  } catch (err) {
    next(err);
  }
}

exports.deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.body;
    const event = await Event.findByIdAndDelete(id);

    if (!event) return res.status(404).json("Not found");

    res.status(204).json();
  } catch (err) {
    next(err);
  }
}