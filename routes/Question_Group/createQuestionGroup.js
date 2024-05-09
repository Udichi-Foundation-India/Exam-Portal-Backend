const Question_Group = require("../../models/QuestionsGroup");

const createQuestionGroup = async (req, res) => {
  try {
    let question_group = await Question_Group(req.body).populate({
      path: "questions",
      model: "question_schema",
      populate: {
        path: "options",
        ref: "options_schema",
      },
    });
    question_group
      .save()
      .then((data) => {
        return res.status(201).send(data);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send(error);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = createQuestionGroup;
