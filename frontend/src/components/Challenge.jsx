import React, { useEffect, useState } from "react";
import ChallengeItem from "./ChallengeItem";
import axios from "axios";

const Challenge = () => {
  const [challenges, setChallenges] = useState([]);
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get("http://localhost:5000/challenges");
        setChallenges(response.data);
      } catch (error) {
        console.error("Gagal fetch challenge:", error);
      }
    };
    fetchChallenges();
  }, []);

  useEffect(() => {
    const filtered = challenges.filter((challenge) =>
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredChallenges(filtered);
  }, [challenges, searchQuery]);

  return (
    <section className="challenges">
      <div>
        <h1 className="text-white text-4xl font-sans font-bold mb-2">
          Challenges
        </h1>
        <p className="text-white text-sm font-sans mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          recusandae odio! <br /> Amet nobis tempore quidem aspernatur magnam
          incidunt ipsa expedita est, ipsum illum! <br /> Fugiat, soluta.
          Facilis corporis ab quod maiores?
        </p>
        <button class="text-white bg-blue border border-blue-white focus:ring-4 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 mb-6">
          Your Work
        </button>

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
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        <hr className="mb-8" />
      </div>
      {filteredChallenges.length === 0 ? (
        <h1 className="text-2xl font-semibold text-gray-900 text-center mt-24">
          Belum ada challenge
        </h1>
      ) : (
        <div className="container grid grid-cols-3 gap-16">
          {filteredChallenges.map((challenge) => (
            <ChallengeItem key={challenge.id} {...challenge} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Challenge;
