const Attempts = require("../../models/Attempts");

const getActiveCandidates = async (req, res) => {
  try {
    let number_of_active_user = await Attempts.find({
      is_started: true,
      is_submitted: false,
    });
    res.status(200).send(number_of_active_user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getActiveCandidates;
