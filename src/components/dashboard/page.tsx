import React from "react";
import Breadcrumb from "@/components/breadcrumb/page";
import SearchBar from "@/components/searchbar/page";
import TodaySale from "@/components/todaySale/page";
import Barchart from "@/components/barchart/page";
const NavBar = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl py-2">Main Dashboard</h1>
        <SearchBar />
      </div>
      <div className="today-sale-section py-4 mt-4">
        <TodaySale />
      </div>
      <div className="second-section py-4 mt-4">
        <div className="flex justify-between gap-4">
          <div className="flex-1 flex">
            <Barchart />
          </div>
          <div className="flex-1 flex">
            <Barchart />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;
