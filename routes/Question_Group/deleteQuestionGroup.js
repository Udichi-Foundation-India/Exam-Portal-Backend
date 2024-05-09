const Question_Group = require("../../models/QuestionsGroup");

const deleteQuestionGroup = async (req, res) => {
  try {
    Question_Group.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = deleteQuestionGroup;
