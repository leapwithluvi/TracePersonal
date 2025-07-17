import { where } from "sequelize";
import User from "../models/UserModel.js";
import Role from "../models/RoleModel.js";
import Team from "../models/TeamModel.js";
import argon2 from "argon2";

//  GET All Users + creator name
export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["id", "uuid", "name", "email", "role", "team"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET User by ID
export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["id", "uuid", "name", "email", "role", "team"],
      where: { uuid: req.params.id },
    });
    if (!response) return res.status(404).json({ msg: "User tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// CREATE User
export const createUser = async (req, res) => {
  const { name, email, password, confirmPassword, role, team } = req.body;

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  }
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name,
      email,
      password: hashPassword,
      role,
      team,
    });

    res.status(201).json({ msg: "User berhasil dibuat" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// UPDATE User
export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

  const { name, email, password, confirmPassword, role, team } = req.body;
  if (password !== confirmPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });

  let hashPassword;
  if (!password) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }

  try {
    await User.update(
      {
        name,
        email,
        password: hashPassword,
        role,
        team,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "User berhasil diupdate" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Validation error",
      error: error.errors ? error.errors[0].message : error.message,
    });
  }
};

// DELETE User
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      uuid: id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

  try {
    await User.destroy({
      where: {
        uuid: id,
      },
    });
    res.status(200).json({ msg: "User berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
