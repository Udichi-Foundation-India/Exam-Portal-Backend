const AttemptSchemaGroup = require("../../models/AttemptsGroupSchema");

const editAttemptsGroup = async (req, res) => {
  try {
    AttemptSchemaGroup.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = editAttemptsGroup;
