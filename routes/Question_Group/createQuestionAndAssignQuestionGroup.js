const Question_Group = require("../../models/QuestionsGroup");
const Questions = require("../../models/Questions");
const Options = require("../../models/Options");
const createQuestionAndAssignQuestionGroup = async (req, res) => {
  try {
    let question = req.body.question;
    let options_list = question.options;
    let option_list_id = [];
    for (let op of options_list) {
      let option = await Options(op);
      option.save();

      option_list_id.push(option._id);
    }
    question.options = option_list_id;
    let question_obj = await Questions(question);
    question_obj.save();
    let question_group = await Question_Group.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: {
          questions: question_obj._id,
        },
      },
      { new: true, returnOriginal: false }
    ).populate({
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
        if (data === null) return res.status(404).send("Not Found");
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

module.exports = createQuestionAndAssignQuestionGroup;
