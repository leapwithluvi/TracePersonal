import React from "react";

const EditDailyLog = () => {
  const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [tanggal, setTanggal] = useState("");

  useEffect(() => {
    setTanggal(getToday());
  }, []);
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-700 text-white text-center font-bold uppercase">
        Edit Daily Wellness Log
      </div>

      <form className="py-4 px-6" method="POST">
        <div className="mb-4">
          <label htmlFor="water" className="block text-gray-700 font-bold mb-2">
            Asupan Air (Liter)
          </label>
          <input
            id="water"
            type="text"
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
            id="workout"s
            name="workout"
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
