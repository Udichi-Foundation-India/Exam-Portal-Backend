const express = require("express");
const router = express.Router();

const getOptionById = require("./getOptionsById");
const createOptions = require("./createOptions");
const editOptions = require("./editOptions");
const deleteOptions = require("./deleteOptions");
const authMiddleware = require("../../Middlewares/authMiddleware");
const authAdminMiddleware = require("../../Middlewares/authAdminTeacher");

router.post("/", [authMiddleware, authAdminMiddleware], createOptions);
router.get("/:id", [authMiddleware, authAdminMiddleware], getOptionById);
router.patch("/:id", [authMiddleware, authAdminMiddleware], editOptions);
router.delete("/:id", [authMiddleware, authAdminMiddleware], deleteOptions);

module.exports = router;
