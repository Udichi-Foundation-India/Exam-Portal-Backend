const express = require("express");
const checkToken = require("../../Middlewares/authCandidatesMiddleware");
const checkCandidatePresent = require("./checkCandidatePresent");
const createCandidate = require("./createCandidates");
const login_user = require("./loginCandidates");
const getCandidateAllottedTest = require("./getCandidateAllotedTest");
const router = express.Router();
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminMiddleware = require("../../Middlewares/authAdminTeacher");

router.get(
  "/alloted_test",
  [authMiddleware, checkToken],
  getCandidateAllottedTest
);
router.post("/login", login_user);
router.post("/", [authMiddleware, authAdminMiddleware], createCandidate);
router.post("/check", [authMiddleware], checkCandidatePresent);

module.exports = router;
