import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

const Schema = mongoose.Schema();

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    minLength: 3,
    maxLength: 64,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
});

UserSchema.statics.register = async function (
  email,
  userName,
  password,
  fullName,
  gender
) {
  if (!email || !password || !userName || !fullName) {
    throw Error(`All fields need to be filled!`);
  }
  if (!validator(email)) {
    throw Error(`${email} is not a valid email address`);
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(`Please choose a stronger password!`);
  }
  const usernameExists = await this.findOne({ userName });
  const emailExists = await this.findOne({ email });

  if (email) {
    throw Error(`You have already an account`);
  }
  if (userName) {
    throw Error(`Username already taken please choose a different username!`);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    email,
    userName,
    password: hash,
    fullName,
    gender,
  });
  return user;
};

// Login method
UserSchema.statics.login = async function (input, password) {
  if (!input || !password) {
    throw Error(`All fields need to be filled!`);
  }
  const userByUsername = this.findOne({ userName: input });
  const userByEmail = this.findOne({ email: input });
  const user = userByUsername || userByEmail;
  if (!user) {
    throw Error(`User not found!`);
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw Error(`Incorrect password!`);
  }
  return user;
};
