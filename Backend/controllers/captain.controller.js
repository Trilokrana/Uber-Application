const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const hashedPassword = await captainModel.hashPassword(password);
    const isCaptainExists = await captainModel.findOne({ email });
    if (isCaptainExists) {
      return res.status(400).json({ error: "Captain already exists" });
    }
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ captain, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.loginCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    return res.status(200).json({ token, captain });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json(req.captain);
};

module.exports.logoutCaptain = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistToken.create({ token });
  return res.status(200).json({ message: "Logged out successfully" });
};
