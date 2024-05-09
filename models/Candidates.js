const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  aadharnumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    default: "Candidate",
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zip: {
    type: String,
  },
  candidate_group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidates_group_schema",
    required: true,
  },
  alloted_test: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "test_schema",
    },
  ],
  attempted_test: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "attempt_group_schema",
    },
  ],
});

module.exports = mongoose.model("candidate_schema", candidateSchema);
