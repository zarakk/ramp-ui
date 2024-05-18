"use client";
import React from "react";
import TravelInsights from "./TravelInsights";

const EmployeeProgram = () => {
  return (
    <div className="flex flex-col">
      <div className="p-4 overflow-auto z-50">
        <TravelInsights />
      </div>
    </div>
  );
};

export default EmployeeProgram;
