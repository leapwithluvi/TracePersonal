import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DescChallenge = () => {
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getChallengeById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/challenges/${id}`
        );
        setDescription(response.data.description);
      } catch (error) {}
    };
    getChallengeById();
  }, [id]);
  return (
    <div className="px-12">
      <div className="space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <h2 className="text-lg font-medium"> Description</h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div
            className="space-y-4 mt-4 text-white leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </details>
      </div>
    </div>
  );
};

export default DescChallenge;
