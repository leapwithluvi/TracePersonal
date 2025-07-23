import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Leaderboards = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white text-4xl font-sans">
        Top Leaderboards Trace Personal
      </h1>
      <p className="text-white text-sm font-sans mt-2 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Maxime,
        id sed. Ipsam aliquam nemo eligendi impedit, quisquam libero commodi
        <br /> quod nam iste, dolorem eius nihil laboriosam dolore inventore
        eaque tempore?
      </p>

        <div class="max-w-screen-xl px-4 py-3 mx-auto mb-12 border-b-2 border-white">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/leaderboards"
                  class={`text-xl ${
                    location.pathname === "/leaderboards"
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                  }`}
                >
                  Top Individuals
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboards/top-teams"
                  class={`text-xl ${
                    location.pathname === "/leaderboards/top-teams"
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                  }`}
                >
                  Top Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>

      <form className="w-full mb-6" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative ">
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
            placeholder="Search by username..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Leaderboards;
