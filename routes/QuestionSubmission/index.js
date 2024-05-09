const router = require("express").Router();
const checkQuestionSubmission = require("./checkQuestionSubmission");
const createQuestionSubmission = require("./createQuestionSubmission");
const editQuestionSubmission = require("./editQuestionSubmission");
const getQuestionSubmissionById = require("./getQuestionSubmissionById");
const authMiddleware = require("../../Middlewares/authMiddleware");

router.post("/", [authMiddleware], createQuestionSubmission);
router.get(
  "/check/:test/:question/:candidate/:attempt_id",
  [authMiddleware],
  checkQuestionSubmission
);
router.patch("/:id", [authMiddleware], editQuestionSubmission);
router.get("/:id", [authMiddleware], getQuestionSubmissionById);

module.exports = router;
