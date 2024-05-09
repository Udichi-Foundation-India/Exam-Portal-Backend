const Candidates_Group_Schema = require("../../models/CandidatesGroup");

const deleteCandidateGroup = async (req, res) => {
  try {
    Candidates_Group_Schema.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found ");
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  } catch (error) {
    res.status(401).json(error.message);
  }
};

module.exports = deleteCandidateGroup;
