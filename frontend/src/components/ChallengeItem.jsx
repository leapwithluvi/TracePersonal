import React from "react";
import { Link } from "react-router-dom";
import ChallengeAuthor from "./ChallengeAuthor";

const ChallengeItem = ({ id, title, description, thumbnail }) => {
  const shortTitle = title.length > 30 ? title.slice(0, 30) + "..." : title;
  const shortDesc =
    description.length > 145 ? description.slice(0, 145) + "..." : description;

  return (
    <article className="bg-white p-4 pb-8 hover:bg-gray-100 rounded-lg shadow-md">
      <div className="shadow-md overflow-hidden rounded-lg h-64">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-6">
        <Link to={`/challenges/${id}`}>
          <div className="mx-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              <strong>{shortTitle}</strong>
            </h2>
            <p className="text-gray-700 mt-2">{shortDesc}</p>
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
