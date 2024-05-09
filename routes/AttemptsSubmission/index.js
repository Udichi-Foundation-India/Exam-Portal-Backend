const express = require("express");
const addAttemptsToGroup = require("./addAttemptsToGroup");
const checkAttemptGroup = require("./checkAttemptsGroup");
const router = express.Router();

const createAttempts = require("./createAttempts");
const createAttemptsGroup = require("./createAttemptsGroup");
const downloadAttemptsById = require("./DownloadAttempts");
const editAttempts = require("./editAttempts");
const editAttemptsGroup = require("./editAttemptsGroup");
const getAttemptsById = require("./getAttemptsById");
const getAttemptsByTestId = require("./getAttemptsByTestId");
const authMiddleware = require("../../Middlewares/authMiddleware");
const getActiveCandidates = require("./getActiveCandidates");
const getAttemptGroupById = require("./getAttemptsGroupById");

router.get("/attempts_groups/:id", [authMiddleware], getAttemptGroupById);
router.get("/active_test", [authMiddleware], getActiveCandidates);
router.get("/download/:id", [authMiddleware], downloadAttemptsById);
router.get("/attempts_group/:test", [authMiddleware], getAttemptsByTestId);
router.get("/attempt/:id/:candidate", [authMiddleware], getAttemptsById);
router.get("/group/:candidate/:test", [authMiddleware], checkAttemptGroup);
router.patch("/groups/:id", [authMiddleware], editAttemptsGroup);
router.patch("/add/:id", [authMiddleware], addAttemptsToGroup);
router.patch("/:id", [authMiddleware], editAttempts);
router.post("/", [authMiddleware], createAttempts);
router.post("/create-group", [authMiddleware], createAttemptsGroup);

module.exports = router;
