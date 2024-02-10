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
    const { email, userName } = user;
    const token = createToken(user._id);
    res.status(200).json({ email, userName, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: `User have found`,
      data: user,
    });
    return user;
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};
