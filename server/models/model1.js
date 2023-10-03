const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Model1Schema = new Schema({
    year:{
        type: Date,
        required: true
    },
    zipcode:{
        type: Number,
        required: true
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    Number_of_Electric_Stations:{
        type: Number,
        required: true
    },
}, { strict: true });

module.exports = mongoose.model("Model1", Model1Schema);