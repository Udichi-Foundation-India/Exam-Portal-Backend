const express = require("express");
const getResultByAttemptsIdAndTestId = require("./getResultByAttemptsIdAndTestId");
const router = express.Router();
const authMiddleware = require("../../Middlewares/authMiddleware");

router.patch(
  "/:test_id/:attempt_id",
  [authMiddleware],
  getResultByAttemptsIdAndTestId
);

module.exports = router;
