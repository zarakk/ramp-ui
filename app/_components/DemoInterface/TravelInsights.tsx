import React from "react";
import BarGraph from "./Bargraph";

const TravelInsights = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Travel Insights</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search & Filter"
          className="border p-2 rounded"
        />
        <div className="flex gap-6">
          <button className="border p-2 hover:bg-gray-50">Sales</button>
          <button className="border p-2 hover:bg-gray-50">Marketing</button>
          <button className="border p-2 hover:bg-gray-50">Engineering</button>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl">Spend</h2>
        <p>$12,096.37 -32%</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3>Cashback</h3>
          <p>$181.45</p>
        </div>
        <div>
          <h3>Number of trips</h3>
          <p>3 -67%</p>
        </div>
        <div>
          <h3>Average trip cost</h3>
          <p>$1,360.26 +10%</p>
        </div>
        <div>
          <h3>Biggest trip</h3>
          <p>$2,207.48</p>
        </div>
      </div>
      <BarGraph />
    </div>
  );
};

export default TravelInsights;
