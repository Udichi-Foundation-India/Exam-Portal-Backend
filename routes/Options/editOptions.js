const Options_Schema = require("../../models/Options");

const editOptions = async (req, res) => {
  try {
    Options_Schema.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
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

module.exports = editOptions;
