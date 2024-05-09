const QuestionSubmissionSchema = require("../../models/Submission");

const getQuestionSubmissionById = async (req, res) => {
  try {
    QuestionSubmissionSchema.findById(req.params.id)
      .populate({
        path: "question",
        model: "question_schema",
        populate: {
          path: "options",
          ref: "options_schema",
        },
      })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getQuestionSubmissionById;
