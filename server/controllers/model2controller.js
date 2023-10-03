const userModel2 = require('../models/model2');

exports.getModel2Prediction = (req, res) => {
    console.log("getModel2Prediction");
    return res.status(200).send("getModel2Prediction");
}