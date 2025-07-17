import {
  getChallenges,
  getChallengeById,
  createChallenge,
  updateChallenge,
  deleteChallenge,
} from "../controllers/Challenge.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

import express from "express";

import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/challenges", verifyUser, getChallenges);
router.get("/challenges/:id", verifyUser, getChallengeById);
router.post("/challenges", verifyUser, adminOnly, createChallenge);
router.patch("/challenges/:id", verifyUser, adminOnly, updateChallenge);
router.delete("/challenges/:id", verifyUser, adminOnly, deleteChallenge);
// upload file photo
router.post("/image", upload.single("gambar"), function (req, res, next) {
  res.send("Upload Berhasil!");
});

export default router;
