const Proctorer = require("../../models/Proctorer");

const getAllProctorer = async (req, res) => {
  try {
    let proctorer = await Proctorer.find({});
    res.status(200).send(proctorer);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getAllProctorer;
