const express = require("express");
const router = express.Router();

const login_user = require("./loginUser");

router.post("/", login_user);

module.exports = router;
