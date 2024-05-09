const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  fathername: {
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
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
