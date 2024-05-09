const express = require("express");
const createTest = require("./createTest");
const deleteTest = require("./deleteTest");
const editTests = require("./editTest");
const getAllTests = require("./getAllTests");
const getTestById = require("./getTestById");
const router = express.Router();
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminMiddleware = require("../../Middlewares/authAdminTeacher");

router.post("/", [authMiddleware, authAdminMiddleware], createTest);
router.get("/all", [authMiddleware], getAllTests);
router.patch("/:id", [authMiddleware, authAdminMiddleware], editTests);
router.get("/:id", [authMiddleware], getTestById);
router.delete("/:id", [authMiddleware, authAdminMiddleware], deleteTest);

module.exports = router;
