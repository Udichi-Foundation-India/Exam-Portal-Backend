const Candidates_Group_Schema = require("../../models/CandidatesGroup");

const getCandidateGroupById = async (req, res) => {
  try {
    let question_group = await Candidates_Group_Schema.findById(
      req.params.id
    ).populate({
      path: "candidates",
      model: "candidate_schema",
    });
    if (question_group === null) return res.status(404).send("Not Found");
    res.status(200).send(question_group);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = getCandidateGroupById;
