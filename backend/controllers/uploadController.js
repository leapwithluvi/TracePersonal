export const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Tidak ada file yang diupload." });
  }

  res.status(200).json({
    message: "Upload berhasil",
    filename: req.file.filename,
    filePath: `/uploads/${req.file.filename}`,
  });
};
