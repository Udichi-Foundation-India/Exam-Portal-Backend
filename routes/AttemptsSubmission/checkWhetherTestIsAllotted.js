const TestSchema = require("../../models/Test");
const Candidates = require("../../models/Candidates");

const checkWhetherTestIsAllotted = async (req, res) => {
  try {
    const candidate = await Candidates.find({
      _id: req.body.user,
      alloted_test: {
        $in: [req.body.test],
      },
    });

    if (candidate.length() === 0)
      res.status(300).send("You are not allowed to attempt");

    res.status(200).send("You are allowed");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = checkWhetherTestIsAllotted;
