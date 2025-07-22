import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex  h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 min-h-screen bg-[#F9F9F9] dark:bg-gray-900 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
