import axios from "axios";
import React, { useEffect, useState } from "react";

const YourWork = () => {
  const [challengesentry, setChallengesEntry] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/challengesentrys"
        );
        setChallengesEntry(response.data);
      } catch (error) {
        console.error("Gagal fetch your work:", error);
      }
    };
    fetchChallenges();
  }, []);
  return (
    <section className="challenges">
      <div>
        <h1 className="text-white text-4xl font-sans font-bold mb-2">
          Your Work
        </h1>
        <p className="text-white text-sm font-sans mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          recusandae odio! <br /> Amet nobis tempore quidem aspernatur magnam
          incidunt ipsa expedita est, ipsum illum! <br /> Fugiat, soluta.
          Facilis corporis ab quod maiores?
        </p>
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
              placeholder="Search Your Work..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        
      </div>
    </section>
  );
};

export default YourWork;
