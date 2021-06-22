const { verifyToken } = require("../helpers/token");
const verifyUser = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const payload = await verifyToken(authorization, secret);
      if (payload.id) {
        req.verified = payload.id;
        next();
      }
    }
  } catch (err) {
    next(new Error("not authorized"));
  }
};

module.exports = verifyUser;
