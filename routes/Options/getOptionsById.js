const Options_Schema = require("../../models/Options");

const getOptionById = async (req, res) => {
  try {
    Options_Schema.findById(req.params.id)
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

module.exports = getOptionById;
