import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const user = await User.findOne({
    attributes: ["id", "uuid", "name", "email", "role", "team"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.userId = user.id;
  req.role = user.role;
  req.team = user.team;
  next();
};
export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    attributes: ["id", "uuid", "name", "email", "role", "team"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.role.toLowerCase() !== "admin")
    return res.status(403).json({ msg: "Akses terlarang!" });
  next();
};
