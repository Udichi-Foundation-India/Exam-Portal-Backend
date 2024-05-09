const Options_Schema = require("../../models/Options");

const createOptions = async (req, res) => {
  try {
    let question = await Options_Schema(req.body);
    question
      .save()
      .then((data) => {
        res.status(200).send({
          data,
        });
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = createOptions;
