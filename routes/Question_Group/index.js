const express = require("express");
const addQuestionToGroup = require("./addQuestionToGroup");
const createQuestionAndAssignQuestionGroup = require("./createQuestionAndAssignQuestionGroup");
const createQuestionGroup = require("./createQuestionGroup");
const deleteQuestionGroup = require("./deleteQuestionGroup");
const editQuestionGroup = require("./editQuestionGroup");
const getAllQuestionGroups = require("./getAllQuestionGroups");
const getQuestionsGroupById = require("./getQuestionsGroupById");
const router = express.Router();
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminMiddleware = require("../../Middlewares/authAdminTeacher");

router.get("/", [authMiddleware, authAdminMiddleware], getAllQuestionGroups);
router.get(
  "/:id",
  [authMiddleware, authAdminMiddleware],
  getQuestionsGroupById
);
router.post("/", [authMiddleware, authAdminMiddleware], createQuestionGroup);
router.post(
  "/create/:id",
  [authMiddleware, authAdminMiddleware],
  createQuestionAndAssignQuestionGroup
);
router.patch(
  "/assign/:id",
  [authMiddleware, authAdminMiddleware],
  addQuestionToGroup
);
router.patch("/:id", [authMiddleware, authAdminMiddleware], editQuestionGroup);
router.delete(
  "/:id",
  [authMiddleware, authAdminMiddleware],
  deleteQuestionGroup
);

module.exports = router;
