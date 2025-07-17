import express from "express";
import { Login, Register, LogOut, Me } from "../controllers/Auth.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/me/", verifyUser, Me);
router.post("/login", Login);
router.post("/register", Register);
router.delete("/logout/", LogOut);

export default router;
