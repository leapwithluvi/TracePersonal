import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MissionChallenge = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [typeChallenge, setTypeChallenge] = useState("");
  const [targetChallenge, setTargetChallenge] = useState("");
  const [visibility, setVisibility] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getChallengeById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/challenges/${id}`
        );
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
    <div className="px-12">
      <div>
        <div className="mt-4 text-white mr-4">
          <label
            htmlFor="startDate"
            className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
          >
            Start Date:
          </label>
          <input
            type="text"
            id="startDate"
            value={startDate}
            disabled
            readOnly
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
          />
          <label
            htmlFor="endDate"
            className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
          >
            End Date:
          </label>
          <input
            type="text"
            id="endDate"
            value={endDate}
            disabled
            readOnly
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
          />

          {/* type, target, visibility */}
          <div className="text-white mb-4">
            <label
              htmlFor="typeChallenge"
              className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
            >
              Type Challenge:
            </label>
            <input
              type="text"
              id="typeChallenge"
              value={typeChallenge}
              disabled
              readOnly
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
            />
            <label
              htmlFor="targetChallenge"
              className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
            >
              Target Challenge:
            </label>
            <input
              type="text"
              id="targetChallenge"
              value={targetChallenge}
              disabled
              readOnly
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
            />
            <label
              htmlFor="visibility"
              className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
            >
              Visibility:
            </label>
            <input
              type="text"
              id="visibility"
              value={visibility}
              disabled
              readOnly
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
            >
              Ikut Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionChallenge;
