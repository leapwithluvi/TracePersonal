import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
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
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const getTeam = async () => {
    const response = await axios.get("http://localhost:5000/teams");
    setTeams(response.data);
  };

    useEffect(() => {
      getTeam();
    }, []);

  return (
    <div>
      {/* <h1 className="text-4xl font-semibold text-white">Add User</h1> */}
      <div className="mt-4 p-6 dark:bg-gray-900 rounded-lg shadow-md">
        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
          <h1 className="text-xl font-bold text-center text-white dark:text-gray-200 mb-8">
            Add New User
          </h1>
          <form
            action="#"
            class="w-full flex flex-col gap-4"
            onSubmit={saveUser}
          >
            <span className="block sm:inline text-center text-red-600 dark">
              {msg}
            </span>
            <div class="flex items-start flex-col justify-start">
              <label
                for="team"
                class="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Team:
              </label>
              <select
                id="team"
                name="team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">-- Pilih Team --</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>

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

            <div class="flex items-start flex-col justify-start">
              <label
                for="role"
                class="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Role:
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">-- Pilih Role --</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            >
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
