const express = require("express");
const router = express.Router();
const User = require("../../models/Signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login_user = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user === null) throw new Error("No User found");

    let successfull_login = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!successfull_login) {
      throw Error("Password didn't match");
    }

    jwt.sign({ user }, "privatekey", { expiresIn: "1h" }, (err, token) => {
      if (err) {
        throw new Error(err);
      }
      res.status(200).send({
        message: "Loggined In Successfully",
        access_token: token,
        user: user,
      });
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = login_user;
