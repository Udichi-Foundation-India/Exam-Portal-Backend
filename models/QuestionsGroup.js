const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question_Group_Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question_schema",
    },
  ],
});

module.exports = mongoose.model("question_group_schema", Question_Group_Schema);
