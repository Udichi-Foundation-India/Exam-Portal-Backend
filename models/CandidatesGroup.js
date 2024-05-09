const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Candidates_Group_Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  candidates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidate_schema",
    },
  ],
});

module.exports = mongoose.model(
  "candidates_group_schema",
  Candidates_Group_Schema
);
