var mongoose = require("mongoose");
var Event = mongoose.Schema;

var event = new Event({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = mongoose.model("Event", event);