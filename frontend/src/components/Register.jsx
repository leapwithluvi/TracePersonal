import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// template: https://tailwindflex.com/@nejaa-badr

const Register = () => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("-");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("User");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        team,
        email,
        password,
        confirmPassword,
        role,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-gray-900 items-center justify-center flex p-4 w-full">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl px-8 py-6 max-w-md w-full transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
        <h1 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Register
        </h1>
        <form action="#" class="w-full flex flex-col gap-4" onSubmit={saveUser}>
          <span className="block sm:inline text-center text-red-600 dark">
            {msg}
          </span>

          <div class="flex items-start flex-col justify-start">
            <label
              for="username"
              class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="email"
              class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div class="flex items-start flex-col justify-start">
            <label
              for="password"
              class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div class="flex items-start flex-col justify-start">
            <label
              for="confirmPassword"
              class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <Link
            to="/"
            className="text-sm text-indigo-800 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            Have a Account ?
          </Link>

          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
