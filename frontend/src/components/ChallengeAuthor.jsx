import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/logo.png";

const ChallengeAuthor = () => {
  return (
    <Link to={`/profile`} className="flex gap-4 items-start">
      <div className="w-10 aspect-square rounded-full shadow-md">
        <img src={Avatar} alt="" />
      </div>
      <div className="challenge__auhtor-details">
        <h5>by: John Doe</h5>
      </div>
    </Link>
  );
};

export default ChallengeAuthor;
