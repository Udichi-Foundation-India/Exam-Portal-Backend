const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSubmissionSchema = new Schema({
  attempt_id: {
    type: Schema.Types.ObjectId,
    ref: "attempt_schema",
  },
  test: {
    type: Schema.Types.ObjectId,
    ref: "test_schema",
    required: true,
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "question_schema",
    required: true,
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "candidate_schema",
    required: true,
  },
  options_marked: [
    {
      type: Schema.Types.ObjectId,
      ref: "options_schema",
    },
  ],
  subjective_answer: {
    type: String,
  },
  status: {
    type: String,
  },
  marks_obtained: {
    type: Number,
    default: 0,
  },
  number_of_correct_options: {
    type: Number,
  },
});

module.exports = mongoose.model(
  "question_submission_schema",
  QuestionSubmissionSchema
);
