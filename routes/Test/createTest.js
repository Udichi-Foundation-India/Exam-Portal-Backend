const Test_Schema = require("../../models/Test");
const Candidates_Group_Schema = require("../../models/CandidatesGroup");
const Candidate = require("../../models/Candidates");

const createTest = async (req, res) => {
  try {
    let test = await Test_Schema(req.body);
    let candidates_groups = req.body.candidates_groups;

    for (let candidates_group of candidates_groups) {
      let candidates_group_schema = await Candidates_Group_Schema.findById(
        candidates_group
      );
      for (let x of candidates_group_schema.candidates) {
        let candidate = await Candidate.findByIdAndUpdate(x, {
          $addToSet: {
            alloted_test: test,
          },
        });
        if (candidate === null) continue;
        candidate.save();
      }
    }

    test
      .save()
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

module.exports = createTest;
