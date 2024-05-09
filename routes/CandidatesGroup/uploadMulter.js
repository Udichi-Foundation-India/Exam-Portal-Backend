const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media/CandidateGroups/",
  filename: function (req, file, cb) {
    cb(null, "CANDIDATEGROUP" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  dest: "files/",
}).single("files");

module.exports = upload;
