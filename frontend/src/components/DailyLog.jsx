import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DailyLog = () => {
  const [data, setData] = useState([]);

  const getLog = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logdays");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const workoutStatus = {
    1: "Sudah Selesai",
    0: "Belum Selesai",
    true: "Sudah Selesai",
    false: "Belum Selesai",
    1: "Sudah Selesai",
    0: "Belum Selesai",
  };

  const moodEmotes = {
    1: "🤡 - Sangat buruk",
    2: "😭 - Mengecewakan",
    3: "🙂 - Biasa saja",
    4: "😀 - Cukup baik",
    5: "😁 - Sangat menyenangkan",
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
      getLog();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold text-white">Daily Wellness Log</h1>
      <p className="text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        culpa veritatis <br /> accusantium sint labore, quisquam natus dolorum.
        Delectus, quidem totam?
      </p>
      <div className="mt-6">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          to="/daily-log/add"
        >
          Create Daily Log
        </Link>
      </div>
      <div class="mt-12 md:flex md:items-center md:justify-between">
        <div class="relative flex items-center mt-4 md:mt-0">
          <span class="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search"
            class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Kalender & Mood</span>
                    </th>
                    <th
                      scope="col"
                      class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Asupan Air
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Durasi Tidur
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Olahraga Hari Ini
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Actions
                    </th>

                    <th scope="col" class="relative py-3.5 px-4">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 class="font-medium text-gray-800 dark:text-white ">
                            {item.date.slice(0, 10)}
                          </h2>
                          <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                            Mood: {moodEmotes[item.mood]}
                          </p>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          {item.water_intake}
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            {item.sleep_duration}
                          </h4>
                        </div>
                      </td>

                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 class="text-gray-700 dark:text-gray-200">
                            {workoutStatus[item.workout_completed]}
                          </h4>
                        </div>
                        {/* progress bar */}
                        {/* <div class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full">
                          <div class="bg-blue-500 w-2/3 h-1.5"></div>
                        </div> */}
                      </td>

                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <Link to={`/daily-log/${item.id}/detail`}>
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                          >
                            Detail
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Page{" "}
          <span class="font-medium text-gray-700 dark:text-gray-100">
            1 of 10
          </span>
        </div>

        <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
          <a
            href="#"
            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <a
            href="#"
            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DailyLog;
