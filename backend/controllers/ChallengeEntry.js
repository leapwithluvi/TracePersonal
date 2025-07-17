import ChallengeEntry from "../models/ChallengeEntryModel.js";

// Get all challenge Entry
export const getChallengeEntry = async (req, res) => {
  try {
    const challengeentry = await ChallengeEntry.findAll();
    res.status(200).json(challengeentry);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get challenge entry by id
export const getChallengeEntryById = async (req, res) => {
  try {
    const challengeentrybyid = await ChallengeEntry.findByPk(req.params.id);
    if (!challengeentrybyid)
      return res.status(404).json({ msg: "Challenge Entry tidak ditemukan" });
    res.status(200).json(challengeentrybyid);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create challenge entry
export const createChallengeEntry = async (req, res) => {
  const { status, daily_progress, complection_rate, challenge_id, user_id } =
    req.body;
  try {
    const createchallengeentry = await ChallengeEntry.create({
      status,
      daily_progress,
      complection_rate,
      challenge_id,
      user_id,
    });
    res.status(202).json({ msg: "Challenge Entry berhasil dibuat", data: createchallengeentry });
  } catch (error) {}
  res.status(500).json({ msg: error.message });
};

// update challenge entry
export const updateChallengeEntry = async (req, res) => {
  try {
    const updateChallengeEntry = await ChallengeEntry.findByPk();
    if (!updateChallengeEntry)
      res.status(404).json({ msg: "Challenge Entry tidak ditemukan" });

    updateChallengeEntry.status = status;
    updateChallengeEntry.daily_progress = daily_progress;
    updateChallengeEntry.complection_rate = complection_rate;
    updateChallengeEntry.challenge_id = challenge_id;
    updateChallengeEntry.user_id = user_id;
    const saveUpdateChallengeEntry = await updateChallengeEntry.save();

    res
      .status(200)
      .json({
        msg: "Challenge Entry berhasil diupdated",
        data: saveUpdateChallengeEntry,
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete challenge entry
export const deleteChallengeEntry = async (req, res) => {
  try {
    const deletechallengeentry = await ChallengeEntry.findByPk(req.params.id);
    if (!deletechallengeentry)
      return res.status(404).json({ msg: "Challenge Entry tidak ditemukan" });
    const deleteentry = await deletechallengeentry.destroy();
    res.status(200).json({ msg: "Data Challenge Entry berhasil di hapus" });
  } catch (error) {
    res.status(500).json({ msg: "Challenge Entry berhasil dihapus" });
  }
};
