import React from "react";
import { Link } from "react-router-dom";
import ChallengeAuthor from "./ChallengeAuthor";

const ChallengeItem = ({ id, title, description, thumbnail }) => {
  const shortTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;
  const shortDesc =
    description.length > 145 ? description.slice(0, 145) + "..." : description;

  return (
    <article className="min-h-screen bg-[#F9F9F9] dark:bg-gray-800 p-4 pb-8 hover:bg-gray-700 rounded-lg shadow-md  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
      <div className="shadow-md overflow-hidden rounded-lg h-64">
        <img
          src={`http://localhost:5000/thumbnail/${thumbnail}`}
          alt={title}
          className="w-full h-full object-cover text-white"
        />
      </div>
      <div className="mt-6">
        <Link to={`/challenges/${id}/overview`}>
          <div className="mx-4">
            <h2 className="text-2xl font-semibold text-white">
              <strong>{shortTitle}</strong>
            </h2>
            <p
              className="text-white mt-2"
              dangerouslySetInnerHTML={{ __html: shortDesc }}
            ></p>
          </div>
        </Link>
        <div className="flex justify-between items-end m-8">
          <ChallengeAuthor />
        </div>
      </div>
    </article>
  );
};

export default ChallengeItem;
