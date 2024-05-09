const Test_Schema = require("../../models/Test");

const getAllTests = async (req, res) => {
  try {
    Test_Schema.find({})
      .populate({
        path: "question_groups",
        model: "question_group_schema",
        populate: {
          path: "questions",
          model: "question_schema",
        },
      })
      .populate({
        path: "candidates_groups",
        model: "candidates_group_schema",
        populate: {
          path: "candidates",
          model: "candidate_schema",
        },
      })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = getAllTests;
