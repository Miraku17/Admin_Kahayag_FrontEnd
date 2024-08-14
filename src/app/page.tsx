import React from "react";
import DashBoard from "@/components/dashboard/page";
import Sidebar from "@/components/sidebar/page";

const Home = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800">
        <Sidebar />
      </div>

      {/* Dashboard */}
      <div className="flex-grow overflow-auto p-4">
        <div className="py-3 px-4 rounded-sm">
          <DashBoard />
        </div>
      </div>
    </div>
  );
};

export default Home;
