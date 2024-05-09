const Question_Schema = require("../../models/Questions");

const getQuestionsById = async (req, res) => {
  try {
    Question_Schema.findById(req.params.id)
      .populate({
        path: "options",
        model: "options_schema",
      })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = getQuestionsById;
