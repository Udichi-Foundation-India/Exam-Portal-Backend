const Question_Group = require("../../models/QuestionsGroup");

const getAllQuestionGroups = async (req, res) => {
  try {
    let question_group = await Question_Group.find({}).populate({
      path: "questions",
      model: "question_schema",
    });
    res.status(200).send(question_group);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = getAllQuestionGroups;
