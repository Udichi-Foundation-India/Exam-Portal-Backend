const QuestionSubmissionSchema = require("../../models/Submission");

const createQuestionSubmission = async (req, res) => {
  try {
    let question_submission_schema = await QuestionSubmissionSchema(req.body);
    question_submission_schema
      .save()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = createQuestionSubmission;
