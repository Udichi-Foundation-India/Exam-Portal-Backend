const Candidates_Group_Schema = require("../../models/CandidatesGroup");

const getAllCandidatesGroups = async (req, res) => {
  try {
    let question_group = await Candidates_Group_Schema.find({}).populate({
      path: "candidates",
      model: "candidate_schema",
    });
    res.status(200).send(question_group);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = getAllCandidatesGroups;
