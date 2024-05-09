const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const signup = require("./routes/Signup/index");
const login = require("./routes/Login/index");
const user_info = require("./routes/User/index");
const questions = require("./routes/Questions/index");
const options = require("./routes/Options/index");
const question_group = require("./routes/Question_Group/index");
const test = require("./routes/Test/index");
const candidate_group = require("./routes/CandidatesGroup/index");
const candidates = require("./routes/Candidates/index");
const question_submission = require("./routes/QuestionSubmission/index");
const attempt_submission = require("./routes/AttemptsSubmission/index");
const proctorer = require("./routes/Proctorer/index");
const assessor = require("./routes/Assessor/index");
const result = require("./routes/Result/index");

app.use(bodyParser.json());
app.use(cors());

app.use("/signup", signup);
app.use("/login", login);
app.use("/user", user_info);
app.use("/questions", questions);
app.use("/options", options);
app.use("/question-group", question_group);
app.use("/test", test);
app.use("/candidate_group", candidate_group);
app.use("/candidate", candidates);
app.use("/question_submission", question_submission);
app.use("/attempts", attempt_submission);
app.use("/proctorer", proctorer);
app.use("/assessor", assessor);
app.use("/result", result);

app.get("/", (req, res) => {
  res.send("We're on Backend Server");
});
mongoose.connect(
  "mongodb+srv://user1:5nPMalxwKmT4in5m@cluster0.gco9idg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  () => {
    console.log("Connected to MongoDB");
    console.log(mongoose.connection.readyState);
  }
);

app.listen(process.env.PORT || 5000);
