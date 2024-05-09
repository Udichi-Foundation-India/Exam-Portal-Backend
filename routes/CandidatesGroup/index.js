const express = require("express");
const createCandidateGroup = require("./createCandidateGroup");
const deleteCandidateGroup = require("./deleteCandidateGroup");
const editCandidateGroup = require("./editCandidateGroup");
const getAllCandidatesGroups = require("./getAllCandidatesGroup");
const getCandidateGroupById = require("./getCandidateGroupById");
const router = express.Router();
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminMiddleware = require("../../Middlewares/authAdminTeacher");
const createCandidatesFromFileUpload = require("./createCandidatesGroupFileUpload");

router.post(
  "/file-upload",
  [authAdminMiddleware, authMiddleware],
  createCandidatesFromFileUpload
);
router.post("/", [authMiddleware, authAdminMiddleware], createCandidateGroup);
router.patch("/:id", [authMiddleware, authAdminMiddleware], editCandidateGroup);
router.get(
  "/all",
  [authMiddleware, authAdminMiddleware],
  getAllCandidatesGroups
);
router.get(
  "/:id",
  [authMiddleware, authAdminMiddleware],
  getCandidateGroupById
);
router.delete(
  "/:id",
  [authMiddleware, authAdminMiddleware],
  deleteCandidateGroup
);

module.exports = router;
