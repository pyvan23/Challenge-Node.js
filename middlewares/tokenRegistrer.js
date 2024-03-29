const jwt = require("jwt-simple");
const moment = require("moment");

const checkToken = (req, res, next) => {
  if (!req.headers["token"]) {
    return res.json({ error: "Enter token in header please" });
  }

  const userToken = req.headers["token"];
  let payload = {};

  try {
    payload = jwt.decode(userToken, "keyword");
  } catch (error) {
    return res.json({ error: "Wrong TOKEN" });
  }

  if (payload.expiredAt < moment().unix()) {
    return res.json({ error: "Time limit, the token has already expired" });
  }

  req.userId = payload.userId;

  next();
};

module.exports = {
  checkToken: checkToken,
};
