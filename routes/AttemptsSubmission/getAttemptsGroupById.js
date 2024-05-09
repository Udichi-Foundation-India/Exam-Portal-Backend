const AttemptSchemaGroup = require("../../models/AttemptsGroupSchema");

const getAttemptGroupById = async (req, res) => {
  try {
    let attempt_schema = await AttemptSchemaGroup.findById(req.params.id)
      .populate({
        path: "candidate",
        model: "candidate_schema",
      })
      .populate({
        path: "attempts_submitted",
        model: "attempt_schema",
      });
    if (!attempt_schema) return res.status(404).send("Not Found");

    return res.status(200).send(attempt_schema);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getAttemptGroupById;
