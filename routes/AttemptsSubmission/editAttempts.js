const AttemptSchema = require("../../models/Attempts");
const Options = require("../../models/Options");
const Questions = require("../../models/Questions");
const Submission = require("../../models/Submission");
const upload = require("./uploadMulter");

const editAttempts = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json(err);
    }
    try {
      let attempt = await AttemptSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      attempt.zip_files = req.file === undefined ? attempt.zip_files : req.file;
      attempt
        .save()
        .then((data) => {
          if (data === null) return res.send(404);
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).json(err.message);
        });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  });
};

module.exports = editAttempts;
