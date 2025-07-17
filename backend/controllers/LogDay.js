import LogDay from "../models/LogDayModel.js";

// GET All LogDay
export const getLogDay = async (req, res) => {
  try {
    const logdays = await LogDay.findAll();
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
  try {
    if (
      !date ||
      !water_intake ||
      !sleep_duration ||
      !workout_completed ||
      !mood
    ) {
      return res.status(400).json({ msg: "Data tidak lengkap" });
    }

    const userId = req.session.userId;
    if (!userId) return res.status(401).json({ msg: "Anda belum login" });

    const createLogDay = await LogDay.create({
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
    const deleteLogDay = await LogDay.destroy();
    if (!deleteLogDay)
      return res.status(404).json({ msg: "LogDay tidak ditemukan" });
    await deleteLogDay.destroy();
    res.status(200).json({ msg: "LogDay berhasil di hapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
