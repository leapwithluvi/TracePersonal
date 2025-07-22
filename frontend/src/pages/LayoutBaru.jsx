import React from "react";
import Navbar from "../components/Navbar";

const LayoutBaru = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 bg-gray-100 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default LayoutBaru;