var mongoose = require("mongoose");
var Event = mongoose.Schema;

var event = new Event({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    department: {type: String, required: true},
    ruleBook: {type: String, required: true},
    contacts: [{name: {type: String}, phoneNumber: {type: Number}, email: {type: String}}],
    eligibility: {type: String, required: true}
})

module.exports = mongoose.model("Event", event);