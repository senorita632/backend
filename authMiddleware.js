const jwt = require("jsonwebtoken");
const config = require("../config");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), config.jwtSecret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

module.exports = { verifyToken };
