import React from "react";
import NavBar from "@/app/navbar/page";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <div className="flex-grow overflow-auto ">
        <div className="py-3 px-4 rounded-sm ">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
