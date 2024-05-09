const Assessor = require("../../models/Assessor");

const getAllAssessor = async (req, res) => {
  try {
    let assessor = await Assessor.find({});
    res.status(200).send(assessor);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getAllAssessor;
