var mongoose = require("mongoose");
var event = require("../models/event");
var Registration = mongoose.Schema;

var registration = new Registration({
    name: {type: String, required: true},
    event: {type: event, required: true},
    email: {type: String, required: true},
    contact: {type: Number, required: true}
})

module.exports = mongoose.model("Event", event);