import express from "express";
import { registerUser, loginUser, getUser } from "../controllers/user.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
export default router;
