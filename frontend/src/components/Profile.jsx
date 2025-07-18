// SAYA INGIN JIKA USER TIDAK ADA UPDATE DARI NAMA GMAIL NEW PASSWORD & CONFIRM PASSWORD DARI SALAH SATUNYA MAKA JIKA USER MENEKAN TOMBOL UPDATE MAKA DIA ADA PERINGATAN ANDA BELUM BISA MEMPERBAHARUI DATA KARENA TIDAK ADA DATA BARU, LALU JIKA USER SUDAH ISI DATA SEBAGIAN YANG INGIN DIA UBAH MAKA KASIH DIA CONFIRM DAN JIKA DIA CONFIRM MAKA PINDAHKAN DIA KE HALAMAN "/" 

import React, { useEffect, useState } from "react";
import Avatar from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import axios from "axios";

const Profile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/me`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
        setTeam(response.data.team);
        setNewPassword(response.data.password);
        setConfirmNewPassword(response.data.confirmPassword);
        setUserId(response.data.uuid);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const confirm = window.confirm;
    try {
      await axios.patch(`http://localhost:5000/users/${userId}`, {
        name,
        email,
        password: NewPassword,
        confirmPassword: confirmNewPassword,
      });
      if (!updateUser === "") {
        alert("anda belum melakukan perubahan!");
        navigate("/profile");
      } else {
        confirm("Apakah Anda yakin ingin melakukan perubahan?");
        navigate("/");
      }
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
            <form className="absolute right-1 bottom-1" onSubmit={updateUser}>
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

          <h1 className="mt-4 text-3xl font-bold text-gray-800 mb-12">
            {name}
          </h1>

          {/* form profile__form */}
          <form className="mx-32" onSubmit={updateUser}>
            <p className="block sm:inline text-center text-red-600 dark">
              {msg}
            </p>

            <label
              htmlFor="username"
              className="text-xl font-bold font-serif text-gray-700 mb-1 justify-start flex"
            >
              Username:
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <label
              htmlFor="email"
              className="text-xl font-bold font-serif text-gray-700 mb-1 justify-start flex"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <label
              htmlFor="role"
              className="text-xl font-bold font-serif text-gray-700 mb-1 justify-start flex"
            >
              Role:
            </label>
            <input
              type="text"
              id="role"
              value={role}
              readOnly
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <label
              htmlFor="team"
              className="text-xl font-bold font-serif text-gray-700 mb-1 justify-start flex"
            >
              Team:
            </label>
            <input
              type="text"
              id="team"
              value={team}
              readOnly
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <label
              htmlFor="password"
              className="text-xl font-bold font-serif text-gray-700 mb-1 justify-start flex"
            >
              New Password:
            </label>
            <input
              type="password"
              placeholder="New Password"
              value={NewPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <label
              htmlFor="team"
              className="text-xl font-bold font-serif text-gray-700 mb-1 justify-start flex"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
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
