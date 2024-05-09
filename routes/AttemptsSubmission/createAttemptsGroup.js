const AttemptSchemaGroup = require("../../models/AttemptsGroupSchema");

const createAttemptsGroup = async (req, res) => {
  try {
    let attempt_schema = await AttemptSchemaGroup(req.body);
    attempt_schema
      .save()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = createAttemptsGroup;
