const express = require("express");
const checkToken = require("../../Middlewares/authMiddleware");
const user_data = require("./userdata");
const router = express.Router();

router.get("/", checkToken, user_data);

module.exports = router;
