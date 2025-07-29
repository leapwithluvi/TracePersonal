import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EditDailyLog = () => {
  const [data, setData] = useState([]);
  const [water_intake, setWaterIntake] = useState("");
  const [sleep_duration, setSleepDuration] = useState("");
  const [workout_completed, setWorkoutCompleted] = useState("");
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  const [notes, setnotes] = useState("");
  const [id, setId] = useState(window.location.pathname.split("/")[2]);
  const navigate = useNavigate();

  const getLog = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/logdays/${id}`);
      setWaterIntake(response.data.water_intake);
      setSleepDuration(response.data.sleep_duration);
      setWorkoutCompleted(response.data.workout_completed);
      setDate(response.data.date.slice(0, 10));

      setMood(response.data.mood);
      setnotes(response.data.notes);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLog();
  }, []);

  const updateLog = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/logdays/${id}`, {
        water_intake,
        sleep_duration,
        workout_completed,
        date,
        mood,
        notes,
      });
      alert("Daily Log berhasil diupdate!");
      navigate("/daily-log");
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat mengupdate Daily Log. Silakan coba lagi.");
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-700 text-white text-center font-bold uppercase">
        Edit Daily Wellness Log
      </div>

      <form className="py-4 px-6" onSubmit={updateLog}>
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
            value={workout_completed}
            onChange={(e) => setWorkoutCompleted(e.target.value)}
            name="workout"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Pilih status olahraga</option>
            <option value="1">Sudah Selesai</option>
            <option value="0">Belum Selesai</option>
            <option value="true">Sudah Selesai</option>
            <option value="false">Belum Selesai</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Tanggal
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
          <label htmlFor="note" className="block text-gray-700 font-bold mb-2">
            Catatan Tambahan
          </label>
          <textarea
            id="note"
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
            Update Log
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDailyLog;
