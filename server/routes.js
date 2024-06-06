const express = require("express");
const router = express.Router();

const loginController = require("./controllers/login");

// send api request to the following controller
router.get("/getLoginComponents", loginController.getLoginComponents);


module.exports = router;
