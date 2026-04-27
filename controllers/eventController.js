// const Event = require('../models/Event');

// exports.createEvent = async (req, res, next) => {
//   try {
//     const event = new Event(req.body);
//     const savedEvent = await event.save();
//     res.status(201).json(savedEvent);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getEvents = async (req, res, next) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getEventById = async (req, res, next) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ error: "NotFound", message: "Event not found" });
//     }
//     res.json(event);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.updateEvent = async (req, res, next) => {
//   try {
//     const event = await Event.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!event) {
//       return res.status(404).json({ error: "NotFound", message: "Event not found" });
//     }
//     res.json(event);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.deleteEvent = async (req, res, next) => {
//   try {
//     const event = await Event.findByIdAndDelete(req.params.id);
//     if (!event) {
//       return res.status(404).json({ error: "NotFound", message: "Event not found" });
//     }
//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// };

// const Event = require("../models/Event.js");

// exports.getEvents = async (req, res, next) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json(events);
//   } catch (err) {
//     next(err)
//   }
// }

// exports.createEvent = async (req, res, next) => {
//   try {
//     const event = new Event(req.body);
//     const savedEvent = await event.save();
//     res.status(201).json({
//       success: true,
//       message: "Event created successfully",
//       data: savedEvent
//     })
//   } catch (err) {
//     next(err)
//   }
// }

// exports.getEventById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const event = await Event.findById(id);
//     if(!event) {
//       return res.status(404).json({
//         message: "Event not found"
//       })
//     }
//     res.status(200).json(event);
//   } catch (err) {
//     next(err);
//   }
// }

// exports.updateEvent = async(req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;
//     const event = await Event.findByIdAndUpdate(
//       id,
//       updates, 
//       { new: true, runValidators: true }
//     )
//     if(!event) {
//       res.status(404).json({
//         mesage: "Event not found"
//       })
//     }
//     res.status(200).json(event);
//   } catch (err) {
//     next(err);
//   }
// }

// exports.deleteEvent = async (req, res, next) => {
//   try {
//     const event = await Event.findByIdAndDelete(req.params.id);
//     if(!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }
//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// }



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