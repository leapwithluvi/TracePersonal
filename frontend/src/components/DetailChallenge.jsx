import React, { useEffect, useState } from "react";
import ChallengeAuthor from "./ChallengeAuthor";
import { Link, useParams } from "react-router-dom";
import thumbnail from "../images/logo.png";
import axios from "axios";

const DetailChallenge = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getChallengeById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/challenges/${id}`
        );
        setTitle(response.data.title);
        setDescription(response.data.description);
        setThumbnail(response.data.thumbnail);
      } catch (error) {}
    };
    getChallengeById();
  }, [id]);
  return (
    <section className="bg-gray-100 py-10 px-14">
      <div className="max-w-screen-md mx-44 bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <ChallengeAuthor />
          <div className="flex gap-4 items-center">
            <Link
              to={`/challenge/edit/${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Edit
            </Link>
            <Link
              to={`/challenge/id/delete`}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </Link>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {title}
        </h1>

        <div className="mb-6 overflow-hidden rounded-lg max-h-96">
          <img
            src={thumbnail}
            alt="Challenge Thumbnail"
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          {description}
        </div>
      </div>
    </section>
  );
};

export default DetailChallenge;
