const userModel4 = require('../models/model4');

exports.getModel4Prediction = (req, res) => {
    console.log("getModel4Prediction");
    return res.status(200).send("getModel4Prediction");
}