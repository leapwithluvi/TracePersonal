import React, { useEffect, useState } from "react";
import ChallengeAuthor from "./ChallengeAuthor";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import DescChallenge from "./DescChallenge";

const DetailChallenge = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [challenges, setChallenges] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

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
        setChallenges(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getChallengeById();
  }, [id]);

  return (
    <div className="px-12">
      <div className="flex justify-between items-center mb-6">
        <ChallengeAuthor />
        {user && user.role.toLowerCase() === "admin" && (
          <div className="flex gap-4 items-center">
            <Link
              to={`/challenge/edit/${challenges.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteChallenge(challenges.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="mb-6 overflow-hidden rounded-lg max-h-96">
        <img
          src={`http://localhost:5000/thumbnail/${challenges.thumbnail}`}
          alt="Challenge Thumbnail"
          className="w-full object-cover text-white"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-white mt-4">{title}</h1>

      <div class="max-w-screen-xl px-4 py-3 mx-auto mb-12 border-b-2 border-white">
        <div class="flex items-center">
          <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <Link
                to={`/challenges/${id}/overview`}
                class={`text-xl ${
                  location.pathname === `/challenges/${id}/overview`
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                to={`/challenges/${id}/mission`}
                class={`text-xl ${
                  location.pathname === `/challenges/${id}/mission`
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                Missions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <DescChallenge/> */}
    </div>
  );
};

export default DetailChallenge;
