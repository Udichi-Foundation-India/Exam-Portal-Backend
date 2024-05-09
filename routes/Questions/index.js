const express = require("express");
const router = express.Router();
const createQuestions = require("./createQuestions");
const getQuestionById = require("./getQuestionsById");
const editQuestions = require("./editQuestions");
const deleteQuestions = require("./deleteQuestions");
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminMiddleware = require("../../Middlewares/authAdminTeacher");
const createQuestionsFromFileUpload = require("./createQuestionsFileUpload");

router.post(
  "/file-upload",
  [authAdminMiddleware, authMiddleware],
  createQuestionsFromFileUpload
);
router.post("/", [authMiddleware, authAdminMiddleware], createQuestions);
router.get("/:id", [authMiddleware, authAdminMiddleware], getQuestionById);
router.patch("/:id", [authMiddleware, authAdminMiddleware], editQuestions);
router.delete("/:id", [authMiddleware, authAdminMiddleware], deleteQuestions);

module.exports = router;
