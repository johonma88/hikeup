const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mtinfoSchema = new Schema({
    mtranges: { type: String, required: true },
    fourteeners: { type: String, required: true },
    elevation: { type: String, required: true },
    lat: { type: String, required: true },
    lon: { type: String, required: true },
    weather:  { type: String, required: true },

});

const Mtinfo = mongoose.model("Mtinfo", mtinfoSchema);

module.exports = Mtinfo;