import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditRole = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getRoleById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/roles/${id}`);
        setName(response.data.name);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRoleById();
  }, [id]);

  const updateRole = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/roles/${id}`, {
        name,
      });
      navigate("/roles");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center w-full p-4">
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-xl px-8 py-6 max-w-md w-full transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
          <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-gray-200">
            Update Role
          </h1>
          <form className="space-y-6" onSubmit={updateRole}>
            <span className="block sm:inline text-center text-red-600 dark">
              {msg}
            </span>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
              >
                Name Role
              </label>
              <input
                type="text"
                id="role"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
                placeholder="Edit the role name"
                required
              />
            </div>

            <div>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Update Role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditRole;
