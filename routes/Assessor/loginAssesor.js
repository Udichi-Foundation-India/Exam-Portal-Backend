const Assessor = require("../../models/Assessor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login_user = async (req, res) => {
  try {
    let candidate = await Assessor.findOne({
      email: req.body.email,
    });

    if (candidate === null) throw new Error("No User found");

    let successfull_login = await bcrypt.compare(
      req.body.password,
      candidate.password
    );

    if (successfull_login === null || successfull_login === false) {
      throw Error("Password didn't match");
    }

    jwt.sign({ candidate }, "privatekey", { expiresIn: "1h" }, (err, token) => {
      if (err) {
        throw new Error(err);
      }
      res.status(200).send({
        message: "Loggined In Successfully",
        access_token: token,
        accessor: candidate,
      });
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = login_user;
