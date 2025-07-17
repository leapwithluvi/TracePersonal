import {
    getChallengeEntry,
    getChallengeEntryById,
    createChallengeEntry,
    updateChallengeEntry,
    deleteChallengeEntry,
} from "../controllers/ChallengeEntry.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

import express from "express";

const router = express.Router();

router.get("/challengesentry", verifyUser, getChallengeEntry);
router.get("/challengesentry/:id", verifyUser, getChallengeEntryById);
router.post("/challengesentry", verifyUser, adminOnly, createChallengeEntry);
router.patch("/challengesentry/:id", verifyUser, adminOnly, updateChallengeEntry);
router.delete("/challengesentry/:id", verifyUser, adminOnly, deleteChallengeEntry);

export default router;
