const express = require("express");
const jwt = require("jsonwebtoken");

const user_data = async (req, res) => {
  jwt.verify(req.token, "privatekey", (err, authorizedData) => {
    if (err) {
      //If error send Forbidden (403)
      console.log("ERROR: Could not connect to the protected route");
      res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data
      res.json({
        message: "Successful log in",
        authorizedData,
      });
      console.log("SUCCESS: Connected to protected route");
    }
  });
};

module.exports = user_data;
