const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const isUserExists = await userModel.findOne({ email });
  if (isUserExists) {
    return res.status(400).json({ error: "User already  exists" });
  }
  const hashedPassword = await userModel.hashPassword(password);
  try {
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = await user.generateAuthToken();

    return res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = await user.generateAuthToken();
    res.cookie("token", token);
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.getProfile = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports.logout = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistToken.create({ token });
  return res.status(200).json({ message: "Logged out successfully" });
};
