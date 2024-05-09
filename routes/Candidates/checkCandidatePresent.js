const Candidates = require("../../models/Candidates");

const checkCandidatePresent = async (req, res) => {
  try {
    const user_data = await Candidates.findOne({
      email: req.body.email,
    });

    if (user_data != null) {
      return res.sendStatus(303);
    }

    res.sendStatus(200);
  } catch (err) {
    res.status(401).json(err.message);
  }
};

module.exports = checkCandidatePresent;
