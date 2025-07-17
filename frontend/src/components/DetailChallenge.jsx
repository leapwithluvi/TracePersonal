import React, { useEffect, useState } from "react";
import ChallengeAuthor from "./ChallengeAuthor";
import { Link, useParams, useNavigate } from "react-router-dom";
import thumbnail from "../images/logo.png";
import axios from "axios";

const DetailChallenge = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [typeChallenge, setTypeChallenge] = useState("");
  const [targetChallenge, setTargetChallenge] = useState("");
  const [visibility, setVisibility] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteChallenge = async (challengeId) => {
  const confirmDelete = window.confirm(
    "Apakah Anda yakin ingin menghapus challenge ini?"
  );
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:5000/challenges/${challengeId}`);
    alert("Challenge berhasil dihapus!");
    navigate("/challenges");
  } catch (error) {
    alert("Gagal menghapus challenge.");
    console.error(error);
  }
};

  useEffect(() => {
    const getChallengeById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/challenges/${id}`
        );
        setTitle(response.data.title);
        setDescription(response.data.description);
        setThumbnail(response.data.thumbnail);
        setStartDate(response.data.start_date?.slice(0, 10));
        setEndDate(response.data.end_date?.slice(0, 10));
        setTypeChallenge(response.data.type);
        setTargetChallenge(response.data.target);
        setVisibility(response.data.visibility);
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
            <button
              onClick={() => deleteChallenge(id)}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>

        <hr />

        {/* start date and end date */}
        <div className="mt-4 text-gray-600 mr-4">
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>

          {/* type, target, visibility */}
          <div className="text-gray-600 mb-4">
            <p>Type Challenge : {typeChallenge}</p>
            <p>Target Challenge : {targetChallenge}</p>
            <p>Visibility : {visibility}</p>
          </div>
          <hr />
        </div>

        <h1 className="text-4xl font-bold mb-4 text-gray-800 mt-4">{title}</h1>

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
