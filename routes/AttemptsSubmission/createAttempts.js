const AttemptSchema = require("../../models/Attempts");
const upload = require("./uploadMulter");

const createAttempts = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json(err);
    }
    try {
      let attempt_schema = await AttemptSchema(req.body);
      attempt_schema.zip_files = req.file;
      attempt_schema
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
  });
};

module.exports = createAttempts;
