const Attempts = require("../../models/Attempts");

const getAttemptsById = async (req, res) => {
  try {
    Attempts.findOne({
      _id: req.params.id,
      candidate: req.params.candidate,
    })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getAttemptsById;
