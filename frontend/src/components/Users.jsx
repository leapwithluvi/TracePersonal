import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "../images/logo.png";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Gagal mengambil data user:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const keyword = searchQuery.trim().toLowerCase();

    if (keyword === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(keyword)
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  return (
    <div className="px-6 py-4">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4 text-white">Users</h1>

      <form className="max-w-md mb-6" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 
              rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredUsers.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            Tidak ada user ditemukan.
          </p>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center gap-2 transition-all hover:shadow-lg"
            >
              <Link
                to={`/profile/${user.uuid}`}
                className="flex flex-col items-center text-center gap-2 w-full"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-gray-300 dark:border-gray-600">
                  <img
                    src={Avatar}
                    alt="ini pp yah"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {user.name}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.team} | {user.role}
                </p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
