const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttemptGroupSchema = new Schema({
  test: {
    type: Schema.Types.ObjectId,
    ref: "test_schema",
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "candidate_schema",
  },
  number_of_attempts_left: {
    type: Number,
    default: 1,
  },
  attempts_submitted: [
    {
      type: Schema.Types.ObjectId,
      ref: "attempt_schema",
    },
  ],
});

module.exports = mongoose.model("attempt_group_schema", AttemptGroupSchema);
