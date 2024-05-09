const Question_Schema = require("../../models/Questions");

const editQuestions = async (req, res) => {
  try {
    Question_Schema.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        return res.status(201).send(data);
      })
      .catch((err) => {
        console.log("Error");
        return res.status(500).send(err);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = editQuestions;
