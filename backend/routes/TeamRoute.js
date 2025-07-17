import express from "express";
import {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/Teams.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/teams", verifyUser, adminOnly, getTeams);
router.get("/teams/:id", verifyUser, adminOnly, getTeamById);
router.post("/teams", verifyUser, adminOnly, createTeam);
router.patch("/teams/:id", verifyUser, adminOnly, updateTeam);
router.delete("/teams/:id", verifyUser, adminOnly, deleteTeam);

export default router;
