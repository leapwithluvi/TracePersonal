// controllers/ChallengeController.js
import Challenge from "../models/ChallengeModel.js";

// Get all challenges
export const getChallenges = async (req, res) => {
  try {
    const challenge = await Challenge.findAll();
    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get one challenge by ID
export const getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findByPk(req.params.id);
    if (!challenge)
      return res.status(404).json({ message: "Challenge tidak ditemukan" });
    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new challenge
export const createChallenge = async (req, res) => {
  const { title, description, start_date, end_date, type, target, visibility, thumbnail } =
    req.body;
  try {
    const newChallenge = await Challenge.create({
      title,
      description,
      start_date,
      end_date,
      type,
      target,
      visibility,
      thumbnail,
    });
    res
      .status(201)
      .json({ msg: "Challenge berhasil dibuat", data: newChallenge });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update challenge by ID
export const updateChallenge = async (req, res) => {
  const { title, description, start_date, end_date, type, target, visibility, thumbnail } =
    req.body;
  try {
    const challenge = await Challenge.findByPk(req.params.id);
    if (!challenge)
      return res.status(404).json({ message: "Challenge tidak ditemukan" });
    challenge.title = title;
    challenge.description = description;
    challenge.start_date = start_date;
    challenge.end_date = end_date;
    challenge.type = type;
    challenge.target = target;
    challenge.visibility = visibility;
    challenge.thumbnail = thumbnail;
    const saveChallenge = await challenge.save();
    res
      .status(200)
      .json({ message: "Challenge berhasil diupdate", data: saveChallenge });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete challenge by ID
export const deleteChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.findByPk(req.params.id);
    if (!challenge)
      return res.status(404).json({ message: "Challenge tidak ditemukan" });
    await challenge.destroy();
    res.json({ message: "Challenge berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


