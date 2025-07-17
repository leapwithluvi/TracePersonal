import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

// template: https://tailwindflex.com/@nejaa-badr
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = document.getElementById("email").value.trim();
  //   const password = document.getElementById("password").value;
  //   const remember = document.getElementById("remember").checked;

  //   if (!email || !password) {
  //     alert("Please fill in all fields");
  //     return;
  //   }

  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     alert("Please enter a valid email address");
  //     return;
  //   }

  //   console.log("Login attempt:", { email, remember });
  //   alert("Login successful!");
  // };

  return (
    <div className="min-h-screen flex items-center justify-center w-full p-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-xl px-8 py-6 max-w-md w-full transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
        {isError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
              <span className="block sm:inline text-center">{message}</span>
          </div>
        )}
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-gray-200">
          Welcome Back!
        </h1>
        <form className="space-y-6" onSubmit={Auth}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a
              href="https://tailwindflex.com/@nejaa-badr/forgot-password-form-2"
              className="inline-block mt-2 text-sm text-indigo-800 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-800 focus:ring-indigo-800 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-900 transition-colors duration-300"
                defaultChecked
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-indigo-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/register"
              className="text-sm text-indigo-800 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Create Account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 transform transition-all duration-300 hover:scale-[1.02] dark:ring-offset-gray-900 relative overflow-hidden"
            onMouseDown={(e) => {
              const button = e.currentTarget;
              const ripple = document.createElement("span");
              const rect = button.getBoundingClientRect();
              const size = Math.max(rect.width, rect.height);
              const x = e.clientX - rect.left - size / 2;
              const y = e.clientY - rect.top - size / 2;

              ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
              `;

              button.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }

          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
