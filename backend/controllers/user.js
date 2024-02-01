import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "5d" });
};
// Register user
export const registerUser = async (req, res) => {
  const { email, userName, password, fullName, gender } = req.body;
  try {
    const user = await User.register(
      email,
      userName,
      password,
      fullName,
      gender
    );
    const token = createToken(user._id);

    res.status(200).json({ userName, email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
// login user

export const loginUser = async (req, res) => {
  const { input, password } = req.body;
  try {
    const user = await User.login(input, password);
    const { userEmail, username } = user;
    const token = createToken(user._id);
    res.status(200).json({ username, userEmail, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
