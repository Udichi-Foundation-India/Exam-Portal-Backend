const mongoose = require("mongoose");

const proctorerSchema = mongoose.Schema({
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
    default: "Proctorer",
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
});

module.exports = mongoose.model("proctorer_schema", proctorerSchema);
