import React from "react";
import { BsBarChartFill } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { MdSell } from "react-icons/md";

const TodaySale = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="left-side-section flex gap-2 flex-1">
        <div className="bg-white rounded-lg shadow-sm py-3 px-4 flex items-center gap-4 flex-1">
          <div className="bg-blue-100 p-2 rounded-lg">
            <BsBarChartFill className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-xs text-gray-500 font-medium">Earnings</h2>
            <p className="text-lg font-bold text-gray-800">$350.4</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm py-3 px-4 flex items-center gap-4 flex-1">
          <div className="bg-blue-100 p-2 rounded-lg">
            <TbPigMoney className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-xs text-gray-500 font-medium">Total Order</h2>
            <p className="text-lg font-bold text-gray-800">500</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm py-3 px-4 flex items-center gap-4 flex-1">
          <div className="bg-blue-100 p-2 rounded-lg">
            <MdSell className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-xs text-gray-500 font-medium">Product Sold</h2>
            <p className="text-lg font-bold text-gray-800">250</p>
          </div>
        </div>
      </div>

      <div className="right-side-section flex gap-2 flex-1">
        <div className="bg-white rounded-lg shadow-sm py-3 px-4 flex items-center gap-4 flex-1">
          <div className="bg-blue-100 p-2 rounded-lg">
            <BsBarChartFill className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-xs text-gray-500 font-medium">Earnings</h2>
            <p className="text-lg font-bold text-gray-800">$350.4</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm py-3 px-4 flex items-center gap-4 flex-1">
          <div className="bg-blue-100 p-2 rounded-lg">
            <TbPigMoney className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-xs text-gray-500 font-medium">Total Order</h2>
            <p className="text-lg font-bold text-gray-800">500</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm py-3 px-4 flex items-center gap-4 flex-1">
          <div className="bg-blue-100 p-2 rounded-lg">
            <MdSell className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-xs text-gray-500 font-medium">Product Sold</h2>
            <p className="text-lg font-bold text-gray-800">250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaySale;