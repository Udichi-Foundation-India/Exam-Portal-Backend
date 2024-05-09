const jwt = require("jsonwebtoken");
const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    jwt.verify(token, "privatekey", (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

module.exports = checkToken;
