import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DailyLogDetail = () => {
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

  const deleteLog = async (id) => {
    const confirm = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:5000/logdays/${id}`);
      alert("Daily Log berhasil dihapus!");
      navigate("/daily-log");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-700 text-white te  xt-center font-bold uppercase">
        Create Daily Wellness Log
      </div>

      <form className="py-4 px-6">
        <div className="mb-4">
          <label htmlFor="water" className="block text-gray-700 font-bold mb-2">
            Asupan Air (Liter)
          </label>
          <input
            id="water"
            type="text"
            value={water_intake}
            disabled
            readOnly
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
            disabled
            readOnly
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
            disabled
            readOnly
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
            disabled
            readOnly
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
            disabled
            readOnly
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
            disabled
            readOnly
            placeholder="Tulis catatan Anda (opsional)"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link
            to="../daily-log"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            ← Back
          </Link>
          <div className="flex gap-2">
            <Link
              to={`/daily-log/${id}/edit`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600"
            >
              Edit
            </Link>
            <Link
              to={`/daily-log/${id}/edit`}
              onClick={() => deleteLog(id)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
            >
              Delete
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DailyLogDetail;
