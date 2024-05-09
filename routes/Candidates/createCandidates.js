const bcrypt = require("bcrypt");
const Candidates = require("../../models/Candidates");
const Candidates_Group_Schema = require("../../models/CandidatesGroup");
const Test = require("../../models/Test");

const createCandidate = async (req, res) => {
  try {
    const user_data = await Candidates.findOne({
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

    const candidate = await Candidates(req.body);
    const test = await Test.find({
      candidates_groups: req.body.candidate_group,
    });
    candidate.attempted_test = test;

    candidate
      .save()
      .then(async (data) => {
        const candidate_group = await Candidates_Group_Schema.findByIdAndUpdate(
          req.body.candidate_group,
          {
            $addToSet: {
              candidates: data._id,
            },
          },
          { new: true, useFindAndModify: false }
        );
        if (candidate_group === null) return res.status(404).send("Not Found");
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(401).json(err.message);
      });
  } catch (err) {
    res.status(401).json(err.message);
  }
};

module.exports = createCandidate;
