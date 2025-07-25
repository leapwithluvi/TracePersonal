import User from "../models/UserModel.js";
import argon2d from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const match = await argon2d.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Password salah" });
  req.session.userId = user.uuid;
  const id = user.id;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  const team = user.team;
  res.status(200).json({ id, uuid, name, email, role, team });
};

export const Register = async (req, res) => {
  const { name, email, password, confirmPassword, role, team } = req.body;

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ msg: "Password dan konfirmasi password tidak cocok" });
  }

  try {
    const hashPassword = await argon2d.hash(password);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      role,
      team,
      userId: req.userId,
    });
    attributes: ["id", "uuid", "name", "email", "role", "team"];
    res.status(201).json({ msg: "User berhasil terdaftar", user: newUser });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const Me = async (req, res) => {
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
  res.status(200).json(user);
};

export const LogOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "Anda berhasil logout" });
  });
};
