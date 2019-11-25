var express = require('express');
var router = express.Router();
const events = require("../controllers/eventController.js");

router.get('/', events.getAll);
router.post("/add", events.create);
router.get("/:eventId", events.findById);

module.exports = router;