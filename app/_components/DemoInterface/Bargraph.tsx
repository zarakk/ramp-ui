import React from "react";

const BarGraph = () => {
  // Replace these with your actual data
  const data = [
    { label: "Cashback", value: 181.45, color: "bg-blue-500" },
    { label: "Number of trips", value: 3, color: "bg-green-500" },
    { label: "Average trip cost", value: 1360.26, color: "bg-yellow-500" },
    { label: "Biggest trip", value: 2207.48, color: "bg-red-500" },
  ];

  // Find the maximum value to scale the bars
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
