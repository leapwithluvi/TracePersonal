import Role from "../models/RoleModel.js";

// GET all roles
export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET role by ID
export const getRoleById = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ msg: "Role tidak ditemukan" });
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// CREATE role
export const createRole = async (req, res) => {
  const { name } = req.body;
  try {
    const exists = await Role.findOne({ where: { name } });
    if (exists) return res.status(400).json({ msg: "Role sudah ada" });

    const createRole = await Role.create({ name });
    res.status(201).json({ msg: "Role berhasil dibuat", data: createRole });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// UPDATE role
export const updateRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ msg: "Role tidak ditemukan" });

    role.name = req.body.name;
    const saveRole = await role.save();

    res.status(200).json({ msg: "Role berhasil diupdate", data: saveRole });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE role
export const deleteRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ msg: "Role tidak ditemukan" });

    await role.destroy();
    res.status(200).json({ msg: "Role berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
