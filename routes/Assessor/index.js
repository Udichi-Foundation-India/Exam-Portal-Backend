const express = require("express");
const router = express.Router();
const login_user = require("./loginAssesor");
const createAssessor = require("./createAssessor");
const getAllAssessor = require("./getAllAssessor");
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminTeacher = require("../../Middlewares/authAdminTeacher");

router.get("/all", [authMiddleware], getAllAssessor);
router.post("/login", login_user);
router.post("/", [authAdminTeacher, authMiddleware], createAssessor);

module.exports = router;
