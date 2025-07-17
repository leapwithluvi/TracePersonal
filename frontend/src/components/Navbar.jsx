import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({
    datas: false,
    leaderboards: false,
  });
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    const confirm = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirm) return;
    navigate("/");
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`${
          collapsed ? "w-16" : "w-64"
        } bg-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            {!collapsed && (
              <span className="ml-2 text-xl font-semibold">Admin</span>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className={`h-6 w-6 transition-transform ${
                collapsed ? "" : "rotate-180"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-5 px-2 space-y-1">
          <NavLink
            to="/home"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md bg-gray-900 text-white"
          >
            <svg
              className="mr-3 h-6 w-6 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10h3m10-11l2 2m-2-2v10h-3m-6 0v-4h4v4m-6 0h6"
              />
            </svg>
            {!collapsed && <span className="sidebar-text">Home</span>}
          </NavLink>

          <NavLink
            to="/challenges"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <svg
              className="mr-3 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {!collapsed && <span className="sidebar-text">Challenges</span>}
          </NavLink>

          {/* Datas Dropdown */}
          {user && user.role.toLowerCase() === "admin" && (
            <div>
              <div>
                <button
                  onClick={() => toggleDropdown("datas")}
                  className="dropdown-btn w-full flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  {!collapsed && <span className="sidebar-text">Data</span>}
                  {!collapsed && (
                    <svg
                      className={`ml-auto h-5 w-5 transition-transform ${
                        openDropdown.datas ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                {!collapsed && openDropdown.datas && (
                  <div className="pl-10 space-y-1 mt-1">
                    <NavLink
                      to="/users"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      Users
                    </NavLink>

                    <NavLink
                      to="/teams"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      Teams
                    </NavLink>
                    <NavLink
                      to="/roles"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      Roles
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Leaderboards Dropdown */}
          {/* {user && user.role.toLowerCase() === "admin" && ( */}
          <div>
            <div>
              <button
                onClick={() => toggleDropdown("leaderboards")}
                className="dropdown-btn w-full flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v18h18M7 16l4-4 3 3 4-6"
                  />
                </svg>

                {!collapsed && (
                  <span className="sidebar-text">Leaderboard</span>
                )}
                {!collapsed && (
                  <svg
                    className={`ml-auto h-5 w-5 transition-transform ${
                      openDropdown.leaderboards ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {!collapsed && openDropdown.leaderboards && (
                <div className="pl-10 space-y-1 mt-1">
                  <NavLink
                    to="/top-individuals"
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    Top Individuals
                  </NavLink>
                  <NavLink
                    to="/top-teams"
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    Top Teams
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          {/* )} */}

          {/* Settings */}
          <Link
            to="#"
            class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <svg
              class="mr-3 h-6 w-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {!collapsed && <span className="sidebar-text">Settings</span>}
          </Link>
        </nav>

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="w-full mb-4 flex items-center py-2 text-base font-medium rounded-md text-white bg-red-500 hover:bg-gray-700"
          >
            <svg
              className="mr-3 h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-6 0v-1m0-8V7a3 3 0 016 0v1"
              />
            </svg>
            {!collapsed && <span className="sidebar-text">Log Out</span>}
          </button>

          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Foto Profile"
            />
            {!collapsed && (
              <div className="ml-3">
                {user && (
                  <p className="text-sm font-medium text-white">{user.name}</p>
                )}
                <a
                  className="text-x1s font-medium text-gray-400"
                  href="/profile"
                >
                  View Profile
                </a>
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
