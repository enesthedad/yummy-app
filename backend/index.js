import userRouter from "./router/user.js";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb atlas");
    })
    .catch((err) => {
      console.log(err);
    });
};
const app = express();
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.listen(process.env.PORT, () => {
  console.log(`app is live on 4000`);
  connectToDatabase();
});
