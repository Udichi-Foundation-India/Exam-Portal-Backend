const express = require("express");
const router = express.Router();

const createUser = require("./createUser");

router.post("/", createUser);

module.exports = router;
