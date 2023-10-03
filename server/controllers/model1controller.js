const userModel1 = require('../models/model1');

exports.getModel1Prediction = (req, res) => {
    console.log("getModel1Prediction");
    return res.status(200).send("getModel1Prediction");
}