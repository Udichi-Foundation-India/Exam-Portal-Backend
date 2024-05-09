const Candidates_Group_Schema = require("../../models/CandidatesGroup");

const editCandidateGroup = async (req, res) => {
  try {
    const candidate_group = await Candidates_Group_Schema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (candidate_group === null) return res.status(404).send("Not Found");
    candidate_group
      .save()
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
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

module.exports = editCandidateGroup;
