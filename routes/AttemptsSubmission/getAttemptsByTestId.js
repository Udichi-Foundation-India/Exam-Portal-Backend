const AttemptSchemaGroup = require("../../models/AttemptsGroupSchema");

const getAttemptsByTestId = async (req, res) => {
  try {
    let attempt_schema = await AttemptSchemaGroup.find({
      test: req.params.test,
    }).populate({
      path: "candidate",
      model: "candidate_schema",
    });
    if (attempt_schema.length === 0) return res.status(404).send("Not Found");

    return res.status(200).send(attempt_schema);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getAttemptsByTestId;
