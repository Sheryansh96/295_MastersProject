const userModel3 = require('../models/model3');

exports.getModel3Prediction = (req, res) => {
    console.log("getModel3Prediction");
    return res.status(200).send("getModel3Prediction");
}