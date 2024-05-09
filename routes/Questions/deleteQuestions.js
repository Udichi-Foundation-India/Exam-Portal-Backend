const Question_Schema = require("../../models/Questions");

const deleteQuestions = async (req, res) => {
  try {
    Question_Schema.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        return res.status(201).send(data);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = deleteQuestions;
