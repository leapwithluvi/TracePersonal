import React, { useEffect, useState } from "react";
import Avatar from "../images/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

const Profile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [avatarFile, setAvatarFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const isOwnProfile = !id || (user && id === user.uuid);

  const changeAvatar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatarFile);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      const uploadUrl = `http://localhost:5000${res.data.filePath}`;
      setAvatar(uploadUrl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          !id || id === user?.uuid
            ? `http://localhost:5000/me`
            : `http://localhost:5000/users/${id}`
        );
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
        setTeam(response.data.team);
        setUserId(response.data.uuid);
        if (response.data.avatar) {
          setAvatar(`http://localhost:5000/images/${response.data.avatar}`);
        }
      } catch (error) {
        if (error.response) setMsg(error.response.data.msg);
      }
    };

    if (user) fetchProfile();
  }, [id, user]);

  const updateUser = async (e) => {
    e.preventDefault();
    if (
      !NewPassword &&
      !confirmNewPassword &&
      name === user.name &&
      email === user.email
    ) {
      alert("Anda belum melakukan perubahan!");
      return;
    }
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin melakukan perubahan?"
    );
    if (!confirmed) return;
    try {
      await axios.patch(`http://localhost:5000/users/${userId}`, {
        name,
        email,
        password: NewPassword,
        confirmPassword: confirmNewPassword,
      });
      alert("Profil berhasil diperbarui!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  if (!user) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <section className="profile dark:bg-gray-800 py-10 min-h-screen">
      <div className="grid place-items-center text-center">
        <div className="w-full flex flex-col items-center">
          <div className="w-40 aspect-square relative">
            <div className="h-full rounded-full overflow-hidden ring-4 ring-white shadow-md">
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover text-white"
              />
            </div>

            {isOwnProfile && (
              <form
                className="absolute right-1 bottom-1"
                onSubmit={changeAvatar}
              >
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="hidden"
                  disabled={!isOwnProfile}
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setAvatarFile(file);
                  }}
                />
                <label
                  htmlFor="avatar"
                  className="bg-gray-600 text-white text-lg w-10 h-9 flex items-center justify-center rounded-full cursor-pointer"
                >
                  <FaEdit />
                </label>
                <button
                  className="bg-blue-600 text-white text-lg w-20 h-6 flex items-center justify-center rounded-full absolute b-24"
                  type="submit"
                >
                  Upload
                </button>
              </form>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white mb-12">{name}</h1>

          <form className="mx-32" onSubmit={updateUser}>
            <p className="block sm:inline text-center text-red-600 dark">
              {msg}
            </p>

            <label
              htmlFor="username"
              className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
            >
              Username:
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={name}
              disabled={!isOwnProfile}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <label
              htmlFor="email"
              className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              disabled={!isOwnProfile}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            />

            <label
              htmlFor="role"
              className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
            >
              Role:
            </label>
            <input
              type="text"
              id="role"
              value={role}
              disabled
              readOnly
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
            />

            <label
              htmlFor="team"
              className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
            >
              Team:
            </label>
            <input
              type="text"
              id="team"
              value={team}
              disabled
              readOnly
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
            />

            {isOwnProfile && (
              <>
                <label
                  htmlFor="newPassword"
                  className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
                >
                  New Password:
                </label>
                <input
                  type="password"
                  placeholder="New Password"
                  value={NewPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
                />

                <label
                  htmlFor="confirmNewPassword"
                  className="text-xl font-bold font-serif text-white mb-1 justify-start flex"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-gray-900 mb-4"
                />

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
                >
                  Update my Profile
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
