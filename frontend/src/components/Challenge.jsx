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
      <div>
        <h1 className="text-white text-4xl font-sans font-bold mb-2">Challenges</h1>
        <p className="text-white text-sm font-sans mb-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          recusandae odio! <br /> Amet nobis tempore quidem aspernatur magnam
          incidunt ipsa expedita est, ipsum illum! <br /> Fugiat, soluta.
          Facilis corporis ab quod maiores?
        </p>
        <hr className="mb-8"/>
      </div>
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
