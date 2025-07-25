import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateDailyLog = () => {
  const [msg, setMsg] = useState("");
  const [water_intake, setWaterIntake] = useState("");
  const [sleep_duration, setSleepDuration] = useState("");
  const [workout_completed, setWorkoutCompleted] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [mood, setMood] = useState("");
  const [notes, setnotes] = useState("");
  const user = useSelector((state) => state.auth.user);
  const user_id = user?.id;

  const navigate = useNavigate();
  const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const saveDailyLog = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/logdays", {
        water_intake,
        sleep_duration,
        date: tanggal,
        workout_completed,
        mood,
        notes,
      },
      { withCredentials: true }
    );
      navigate("/daily-log");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    setTanggal(getToday());
  }, []);
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-700 text-white te  xt-center font-bold uppercase">
        Create Daily Wellness Log
      </div>

      <form className="py-4 px-6" onSubmit={saveDailyLog}>
        <span className="block sm:inline text-center text-red-600 dark">
          {msg}
        </span>
        <div className="mb-4">
          <label htmlFor="water" className="block text-gray-700 font-bold mb-2">
            Asupan Air (Liter)
          </label>
          <input
            id="water"
            type="text"
            value={water_intake}
            onChange={(e) => setWaterIntake(e.target.value)}
            placeholder="Contoh: 2.5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sleep" className="block text-gray-700 font-bold mb-2">
            Durasi Tidur (Jam)
          </label>
          <input
            id="sleep"
            type="number"
            value={sleep_duration}
            onChange={(e) => setSleepDuration(e.target.value)}
            placeholder="Contoh: 7.5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="workout"
            className="block text-gray-700 font-bold mb-2"
          >
            Olahraga Hari Ini
          </label>
          <select
            id="workout"
            name="workout"
            value={workout_completed}
            onChange={(e) => setWorkoutCompleted(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Pilih status olahraga</option>
            <option value="not-complete">Belum Selesai</option>
            <option value="complete">Sudah Selesai</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Tanggal
          </label>
          <input
            id="date"
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mood" className="block text-gray-700 font-bold mb-2">
            Mood Hari Ini
          </label>
          <select
            id="mood"
            name="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Pilih mood Anda</option>
            <option value="1">🤡 - Sangat buruk</option>
            <option value="2">😭 - Mengecewakan</option>
            <option value="3">🙂 - Biasa saja</option>
            <option value="4">😀 - Cukup baik</option>
            <option value="5">😁 - Sangat menyenangkan</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="notes" className="block text-gray-700 font-bold mb-2">
            Catatan Tambahan
          </label>
          <textarea
            id="notes"
            rows="4"
            value={notes}
            onChange={(e) => setnotes(e.target.value)}
            placeholder="Tulis catatan Anda (opsional)"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex items-center justify-center mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Create Log
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDailyLog;
