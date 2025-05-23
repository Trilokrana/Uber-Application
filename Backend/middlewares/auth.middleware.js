const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const jwt = require("jsonwebtoken");
const blacklistToken = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const isBlacklisted = await blacklistToken.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id).select("+password");
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
   
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const isBlacklisted = await blacklistToken.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    const captain = await captainModel
      .findById(decoded._id)
      .select("+password");

    
    if (!captain) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.captain = captain;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
