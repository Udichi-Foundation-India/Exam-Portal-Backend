const Candidate = require("../../models/Candidates");
const jwt = require("jsonwebtoken");

const getCandidateAllottedTest = async (req, res) => {
  try {
    Candidate.findById(req.user_id)
      .populate({
        path: "alloted_test",
        model: "test_schema",
        populate: {
          path: "question_groups",
          model: "question_group_schema",
        },
      })
      .then((data) => {
        if (data === null) res.status(404).status("Not found");

        res.status(200).send(data);
      })
      .catch((er) => {
        res.status(500).json(er);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getCandidateAllottedTest;
