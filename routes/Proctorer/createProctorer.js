const bcrypt = require("bcrypt");
const Proctorer = require("../../models/Proctorer");

const createAssessor = async (req, res) => {
  try {
    const user_data = await Proctorer.findOne({
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

    const candidate = await Proctorer(req.body);
    candidate
      .save()
      .then(async (data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(401).json(err.message);
      });
  } catch (err) {
    res.status(401).json(err.message);
  }
};

module.exports = createAssessor;
