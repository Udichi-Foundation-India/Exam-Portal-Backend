const checkAdminToken = (req, res, next) => {
  const user_type = req.headers["user-type"];
  if (typeof user_type !== "undefined") {
    if (user_type === "teacher" || user_type === "admin") next();
    else {
      console.log("Error");
      res.sendStatus(403);
    }
  } else {
    console.log("Error....");
    res.sendStatus(403);
  }
};

module.exports = checkAdminToken;
