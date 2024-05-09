const Attempts = require("../../models/Attempts");

const downloadAttemptsById = async (req, res) => {
  try {
    Attempts.findOne({
      _id: req.params.id,
    })
      .then((data) => {
        if (data === null) return res.status(404).send("Not Found");
        let zip_file = data.zip_files;
        if (zip_file === undefined)
          return res.status(404).send("Not file Found");
        res.download(zip_file.path, zip_file.filename);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err.message);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = downloadAttemptsById;
