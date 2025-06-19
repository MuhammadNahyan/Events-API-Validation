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