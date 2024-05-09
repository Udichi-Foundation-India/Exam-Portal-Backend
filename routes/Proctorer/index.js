const express = require("express");
const router = express.Router();
const login_user = require("./loginProctorer");
const createProctorer = require("./createProctorer");
const getAllProctorer = require("./getAllProctorer");
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminTeacher = require("../../Middlewares/authAdminTeacher");

router.get("/all", [authMiddleware], getAllProctorer);
router.post("/login", login_user);
router.post("/", [authMiddleware, authAdminTeacher], createProctorer);

module.exports = router;
