const Test_Schema = require("../../models/Test");

const getTestById = async (req, res) => {
  try {
    Test_Schema.findById(req.params.id)
      .populate({
        path: "question_groups",
        model: "question_group_schema",
        populate: {
          path: "questions",
          model: "question_schema",
          populate: {
            path: "options",
            ref: "options_schema",
          },
        },
      })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = getTestById;
