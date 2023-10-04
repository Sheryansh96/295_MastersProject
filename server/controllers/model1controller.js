const userModel1 = require('../models/model1');
const aws = require('aws-sdk');
const util = require('../utils/util');


exports.getModel1Prediction = async (req, res) => {

    util.invokeSageMakerEndpoint("", req.body, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred.");
        }
        return res.status(200).send(data);
    });
}