import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import avatar from "../images/logo.png";

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
    const confirm = window.confirm("Apakah Anda yakin ingin logout?");
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
            {!collapsed && (
              <span className="sidebar-text  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
                Home
              </span>
            )}
          </NavLink>

          <NavLink
            to="/challenges"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
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
            {!collapsed && (
              <span className="sidebar-text  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
                Challenges
              </span>
            )}
          </NavLink>

          <NavLink
            to="/all-users"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
          >
            <svg
              className="mr-3 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {!collapsed && <span className="sidebar-text ">Users</span>}
          </NavLink>

          {/* Datas Dropdown */}
          {user && user.role.toLowerCase() === "admin" && (
            <div>
              <div>
                <button
                  onClick={() => toggleDropdown("datas")}
                  className="dropdown-btn w-full flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                >
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <g id="System / Data">
                      <path
                        id="Vector"
                        d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
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
                      className="block text-sm text-gray-300 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                    >
                      Users
                    </NavLink>

                    <NavLink
                      to="/teams"
                      className="block text-sm text-gray-300 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                    >
                      Teams
                    </NavLink>
                    <NavLink
                      to="/roles"
                      className="block text-sm text-gray-300 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                    >
                      Roles
                    </NavLink>
                    <NavLink
                      to="/challenge/add"
                      className="block text-sm text-gray-300 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                    >
                      Challange
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
                className="dropdown-btn w-full flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
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
                    className="block text-sm text-gray-300 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                  >
                    Top Individuals
                  </NavLink>
                  <NavLink
                    to="/top-teams"
                    className="block text-sm text-gray-300 hover:text-white  shadow-2xl rounded-xl transform transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                  >
                    Top Teams
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          {/* )} */}

          {/* Settings */}
          {/* <Link
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
          </Link> */}
        </nav>

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="w-full bg-gray-700 mb-4 flex items-center py-2 text-base font-medium rounded-md text-white hover:bg-red-500"
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
              src={avatar}
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
