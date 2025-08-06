const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const verifyToken = jwt.verify(token,'jsonkey')
    console.log("VERIFY TOKEN",verifyToken);
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "invalid token ",
    });
  }
};
