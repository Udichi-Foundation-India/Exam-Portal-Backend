const Attempts = require("../../models/Attempts");
const Options = require("../../models/Options");
const Questions = require("../../models/Questions");
const QuestionSubmission = require("../../models/Submission");

const getResultByAttemptsIdAndTestId = async (req, res) => {
  try {
    const { test_id, attempt_id } = req.params;
    let attempt = await Attempts.findOne({
      _id: attempt_id,
      test: test_id,
    });
    if (!attempt) return res.status(404).send("Not Found");

    let total_marks = 0;

    let question_submission = attempt.questions_submitted;
    for (let qid of question_submission) {
      let q_submission = await QuestionSubmission.findById(qid);
      if (q_submission === null) continue;
      let ques = await Questions.findById(q_submission.question);
      let options = q_submission.options_marked;
      let marks_obtained = 0;
      let n = ques.number_of_correct_options;
      let positive_marks = ques.positive_marks;
      let negative_marks = ques.negative_marks;

      let p_marks = positive_marks / n;
      for (let op of options) {
        let op_obj = await Options.findById(op);
        if (!op_obj) continue;

        if (op_obj.is_correct) marks_obtained += p_marks;
        else {
          marks_obtained = negative_marks;
          break;
        }
      }
      total_marks += marks_obtained;
      q_submission.marks_obtained = marks_obtained;
      q_submission.save();
    }

    attempt.marks_obtained = total_marks;

    res.status(200).send(attempt);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getResultByAttemptsIdAndTestId;
