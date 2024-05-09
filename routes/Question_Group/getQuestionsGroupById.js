const Question_Group = require("../../models/QuestionsGroup");
const mongoose = require("mongoose");

const getQuestionsGroupById = async (req, res) => {
  try {
    if (mongoose.Types.ObjectId.isValid(req.params.id) === false)
      return res.status(500).send("Invalid Id");
    let question_data = await Question_Group.findById(req.params.id).populate({
      path: "questions",
      ref: "question_schema",
      populate: {
        path: "options",
        ref: "options_schema",
      },
    });

    if (question_data === null) res.status(400).send("Not Found");
    return res.status(200).send(question_data);
  } catch (error) {
    // console.log(error)
    return res.status(500).send(error);
  }
};

module.exports = getQuestionsGroupById;
