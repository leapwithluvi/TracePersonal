import path from "path";
import {
  getChallenges,
  getChallengeById,
  createChallenge,
  updateChallenge,
  deleteChallenge,
} from "../controllers/Challenge.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
import express from "express";
const router = express.Router();

router.get("/challenges", verifyUser, getChallenges);
router.get("/challenges/:id", verifyUser, getChallengeById);
router.post("/challenges", verifyUser, adminOnly, createChallenge);
router.patch("/challenges/:id", verifyUser, adminOnly, updateChallenge);
router.delete("/challenges/:id", verifyUser, adminOnly, deleteChallenge);

export default router;
