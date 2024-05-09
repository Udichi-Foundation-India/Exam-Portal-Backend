const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    const user_id = bearer[2];

    req.token = token;
    req.user_id = user_id;
    next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = checkToken;
