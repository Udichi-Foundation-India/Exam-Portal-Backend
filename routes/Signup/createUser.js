const express = require("express");
const Signup = require("../../models/Signup");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const user_data = await Signup.findOne({
      email: req.body.email,
    });

    if (user_data != null) {
      throw new Error("Email is already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedAadharNumber = await bcrypt.hash(req.body.aadharnumber, salt);
    req.body.password = hashedPassword;
    req.body.aadharnumber = hashedAadharNumber;
    const signup = new Signup(req.body);

    signup
      .save()
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(401).json(err.message);
      });
  } catch (err) {
    res.status(401).json(err.message);
  }
};

module.exports = createUser;
