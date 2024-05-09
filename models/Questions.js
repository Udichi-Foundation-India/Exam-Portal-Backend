const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question_Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  is_objective: {
    type: Boolean,
    default: false,
  },
  options: [
    {
      type: Schema.Types.ObjectId,
      ref: "options_schema",
    },
  ],
  positive_marks: {
    type: Number,
    required: true,
  },
  negative_marks: {
    type: Number,
    required: true,
  },
  type_question: {
    type: String,
    required: true,
  },
  number_of_correct_options: {
    type: Number,
  },
});

module.exports = mongoose.model("question_schema", Question_Schema);
