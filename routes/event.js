var express = require('express');
var router = express.Router();
const events = require("../controllers/eventController.js");

router.post("/add", events.createEvent);
router.get('/', events.getAllEvents);
router.get("/:eventId", events.getEventDetail);

module.exports = router;