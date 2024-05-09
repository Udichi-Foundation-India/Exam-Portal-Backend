const Question_Group = require("../../models/QuestionsGroup");

const editQuestionGroup = async (req, res) => {
  try {
    Question_Group.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((data) => {
        if (data === null) res.status(404).send("Not Found");
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = editQuestionGroup;
