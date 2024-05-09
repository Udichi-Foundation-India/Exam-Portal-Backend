const QuestionSubmissionSchema = require("../../models/Submission");

const checkQuestionSubmission = async (req, res) => {
  try {
    let question_submission_schema = await QuestionSubmissionSchema.findOne({
      question: req.params.question,
      test: req.params.test,
      candidate: req.params.candidate,
      attempt_id: req.params.attempt_id,
    });

    if (question_submission_schema === null)
      return res.status(404).send("Not Found");

    res.status(200).send(question_submission_schema);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

module.exports = checkQuestionSubmission;
