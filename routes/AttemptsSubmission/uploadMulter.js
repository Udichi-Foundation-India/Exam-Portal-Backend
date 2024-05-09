const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media/AttemptsZipFile/",
  filename: function (req, file, cb) {
    cb(null, "ATTEMPTS" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  dest: "zip_files/",
}).single("zip_files");

module.exports = upload;
