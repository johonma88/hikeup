const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  organizer: { type: String, required: true },
  contactInfo: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  fourtennerSelected: { type: String, required: true },
  date:  { type: Date, required: true },
  time: { type: String, required: true },
  meetingPoint: { type: String, required: true },

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
