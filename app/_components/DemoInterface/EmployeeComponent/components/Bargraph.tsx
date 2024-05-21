import { data } from "@/constants/constants";
import React from "react";

export const BarGraph = () => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className="w-32">{item.label}</div>
          <div className="flex-1 h-4 bg-gray-200 rounded">
            <div
              className={`${item.color} h-full rounded`}
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarGraph;
