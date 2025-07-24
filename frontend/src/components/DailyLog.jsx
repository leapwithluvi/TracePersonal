import React from "react";
import { Link } from "react-router-dom";

const DailyLog = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-white">
        Daily Wellness Log
      </h1>
      <p className="text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        culpa veritatis <br /> accusantium sint labore, quisquam natus dolorum.
        Delectus, quidem totam?
      </p>
      <div className="mt-6">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          to="/daily-log/add"
        >
          Create Daily Log
        </Link>
      </div>
    </div>
  );
};

export default DailyLog;
