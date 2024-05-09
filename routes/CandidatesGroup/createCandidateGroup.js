const Candidates_Group_Schema = require("../../models/CandidatesGroup");

const createCandidateGroup = async (req, res) => {
  try {
    const candidate_group = await Candidates_Group_Schema(req.body);
    candidate_group
      .save()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  } catch (error) {
    console.log(error);
    res.status(401).json(error.message);
  }
};

module.exports = createCandidateGroup;
