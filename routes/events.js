const express = require("express");
const router = express.Router();
const {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
} = require("../controllers/eventController.js");
const eventValidator = require("../validators/eventValidator.js");

router.post("/", eventValidator, createEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);
router.put("/:id", eventValidator, updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;



/*
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController.js');
const eventValidator = require('../validators/eventValidator');


router.post('/', eventValidator, eventController.createEvent);

router.get('/', eventController.getEvents);

router.get('/:id', eventController.getEventById);

router.put('/:id', eventValidator, eventController.updateEvent);

router.delete('/:id', eventController.deleteEvent);

module.exports = router;
*/