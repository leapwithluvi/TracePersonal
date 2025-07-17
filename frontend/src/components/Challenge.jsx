import React, { useEffect, useState } from "react";
import ChallengeItem from "./ChallengeItem";
import axios from "axios";

const Challenge = () => {
  const [challenges, setChallenges] = useState([]);

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

  return (
    <section className="challenges">
      {challenges.length > 0 ? (
        <div className="container grid grid-cols-3 gap-16">
          {challenges.map((challenge) => (
            <ChallengeItem key={challenge.id} {...challenge} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-gray-900 text-center mt-24">
          Belum ada challenge
        </h1>
      )}
    </section>
  );
};

export default Challenge;
