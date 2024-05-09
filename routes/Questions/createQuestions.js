const Question_Schema = require("../../models/Questions");

const createQuestions = async (req, res) => {
  try {
    let question = await Question_Schema(req.body).populate({
      path: "options",
      model: "options_schema",
    });
    question
      .save()
      .then((data) => {
        res.status(200).send({
          data,
        });
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = createQuestions;
