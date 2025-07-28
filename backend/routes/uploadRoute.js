import express from "express";
import multer from "multer";
import path from "path";
import { uploadImage } from "../controllers/uploadController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb("Hanya file gambar yang diperbolehkan!");
  }
};

const upload = multer({ storage, fileFilter });

router.post("/upload", upload.single("avatar"), uploadImage, (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

export default router;
