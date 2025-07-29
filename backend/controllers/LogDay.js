import LogDay from "../models/LogDayModel.js";
import User from "../models/UserModel.js";

// GET All LogDay
export const getLogDay = async (req, res) => {
  try {
    const logdays = await LogDay.findAll({});
    res.status(200).json(logdays);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET LogDay By ID
export const getLogDayById = async (req, res) => {
  try {
    const logday = await LogDay.findByPk(req.params.id);
    if (!logday) return res.status(404).json({ msg: "LogDay tidak ditemukan" });
    res.status(200).json(logday);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create (POST) LogDay
export const createLogDay = async (req, res) => {
  const { date, water_intake, sleep_duration, workout_completed, mood, notes } =
    req.body;
  const userUuid = req.session.userId;
  try {
    if (!userUuid) return res.status(401).json({ msg: "Anda belum login" });
    if (
      date == null ||
      water_intake == null ||
      sleep_duration == null ||
      workout_completed == null ||
      mood == null
    ) {
      return res.status(400).json({ msg: "Data tidak lengkap" });
    }
    const user = await User.findOne({ where: { uuid: userUuid } });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    const createLogDay = await LogDay.create({
      user_id: user.id,
      date,
      water_intake,
      sleep_duration,
      workout_completed,
      mood,
      notes,
    });
    res.status(201).json({ msg: "LogDay berhasil dibuat", data: createLogDay });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update (PATCH) LogDay
export const updateLogDay = async (req, res) => {
  const { date, water_intake, sleep_duration, workout_completed, mood, notes } =
    req.body;
  try {
    const updateLogDay = await LogDay.findByPk(req.params.id);
    if (!updateLogDay)
      return res.status(404).json({ msg: "LogDay tidak ditemukan" });

    updateLogDay.date = date;
    updateLogDay.water_intake = water_intake;
    updateLogDay.sleep_duration = sleep_duration;
    updateLogDay.workout_completed = workout_completed;
    updateLogDay.mood = mood;
    updateLogDay.notes = notes;
    const saveLogDay = await updateLogDay.save();

    res
      .status(200)
      .json({ msg: "LogDay berhasil di updated", data: saveLogDay });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE LogDay
export const deleteLogDay = async (req, res) => {
  try {
    const logday = await LogDay.findByPk(req.params.id);
    if (!deleteLogDay)
      return res.status(404).json({ msg: "LogDay tidak ditemukan" });
    await logday.destroy();
    res.status(200).json({ msg: "LogDay berhasil di hapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
