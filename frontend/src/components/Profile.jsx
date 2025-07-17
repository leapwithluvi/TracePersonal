import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../images/logo.png";
import { FaEdit, FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [cureentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.setEmail);
        setNewPassword(response.data.NewPassword);
        setConfirmNewPassword(response.data.confirmNewPassword);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        NewPassword,
        confirmNewPassword,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="profile bg-gray-100 py-10 min-h-screen">
      <div className="grid place-items-center text-center">
        {/* <Link
          to="/profile"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          My posts
        </Link> */}

        <div className="w-full flex flex-col items-center">
          {/* Avatar Container */}
          <div className="w-40 aspect-square relative">
            <div className="h-full rounded-full overflow-hidden ring-4 ring-white shadow-md">
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Edit Button */}
            <form className="absolute right-1 bottom-1">
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="hidden"
                accept="png, jpeg, jpg" 
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label
                htmlFor="avatar"
                className="bg-gray-600 text-white text-lg w-10 h-9 flex items-center justify-center rounded-full cursor-pointer"
              >
                <FaEdit />
              </label>

              {/* Save Button (tampil kalau file dipilih) */}
              {/* {avatar && (
                <button className="bg-blue-600 text-white text-lg w-10 h-10 flex items-center justify-center rounded-full absolute bottom-px  ">
                  <FaCheck />
                </button>
              )} */}
            </form>
          </div>

          {/* Nama User */}
          {user && (
            <h1 className="mt-4 text-3xl font-bold text-gray-800 mb-12">
              {user.name}
            </h1>
          )}

          {/* form profile__form */}
          <form className="mx-32" onSubmit={updateUser}>
            <p className="block sm:inline text-center text-red-600 dark mb-6">
              {msg}
            </p>
            <input
              className="shadow-sm rounded-lg w-full px-4 lg:mb-2 md:mb-2 sm:mb-24 py-2.5 mb-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="shadow-sm rounded-lg w-full  px-4 py-2.5 mb-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input
              className="shadow-sm rounded-lg w-full px-4 py-2.5 mb-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
              type="password"
              placeholder="Current Password"
              value={cureentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            /> */}
            <input
              className="shadow-sm rounded-lg w-full px-4 py-2.5 mb-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
              type="password"
              placeholder="New Password"
              value={NewPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className="shadow-sm rounded-lg w-full px-4 py-2.5 mb-2 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
              type="password"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex"
            >
              Update my Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
