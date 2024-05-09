const AttemptSchemaGroup = require("../../models/AttemptsGroupSchema");

const checkAttemptGroup = async (req, res) => {
  try {
    AttemptSchemaGroup.findOne({
      candidate: req.params.candidate,
      test: req.params.test,
    })
      .then((data) => {
        if (data === null) return res.status(404).send("Not found");
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = checkAttemptGroup;
