const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mountainSchema = new Schema({
    mtranges: { type: String, required: true },
    fourteeners: { type: String, required: true },
});

const Mountain = mongoose.model("Mountain", mountainSchema);

module.exports = Mountain;
