const express = require("express");
const router = express.Router();
const model1Controller = require("../controllers/model1controller");
const model2Controller = require("../controllers/model2controller");
const model3Controller = require("../controllers/model3controller");
const model4Controller = require("../controllers/model4controller");



router.post("/all/getModel1Prediction", model1Controller.getModel1Prediction)
router.post("/all/getModel2Prediction", model2Controller.getModel2Prediction)
router.post("/all/getModel3Prediction", model3Controller.getModel3Prediction)
router.post("/all/getModel4Prediction", model4Controller.getModel4Prediction)


module.exports = router;