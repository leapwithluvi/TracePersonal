import {
  getLogDay,
  getLogDayById,
  createLogDay,
  updateLogDay,
  deleteLogDay,
} from "../controllers/LogDay.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

import express from "express";

const router = express.Router();

router.get("/logdays", verifyUser, getLogDay);
router.get("/logdays/:id", verifyUser, getLogDayById);
router.post("/logdays/", verifyUser, createLogDay);
router.patch("/logdays/:id", verifyUser, updateLogDay);
router.delete("/logdays/:id", verifyUser, adminOnly, deleteLogDay);

export default router;
