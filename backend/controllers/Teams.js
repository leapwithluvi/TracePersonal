import Team from "../models/TeamModel.js";

// GET ALL TEAMS
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET TEAM BY ID
export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ msg: "Team tidak ditemukan" });
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// CREATE TEAM
export const createTeam = async (req, res) => {
  const { name } = req.body;
  try {
    const exists = await Team.findOne({ where: { name } });
    if (exists) return res.status(400).json({ msg: "Team sudah ada" });

    const createTeam = await Team.create({ name });
    res.status(201).json({ msg: "Team berhasil dibuat", data: createTeam });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// UPDATE TEAM
export const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ msg: "Team tidak ditemukan" });

    team.name = req.body.name;
    const newTeam = await team.save();

    res.status(200).json({ msg: "Team berhasil diupdate", data: newTeam });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE TEAM
export const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ msg: "Team tidak ditemukan" });

    await team.destroy();
    res.status(200).json({ msg: "Team berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
