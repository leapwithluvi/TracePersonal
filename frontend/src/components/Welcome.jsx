import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-900">
        Welcome,<strong> {user && user.name}!</strong>
      </h1>
      <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
        <p className="text-gray-600">Jump back in, or start something new.</p>
      </div>
    </div>
  );
};

export default Welcome;
