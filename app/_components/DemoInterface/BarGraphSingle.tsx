import React from "react";

const BarGraphSingle = () => {
  // Replace these with your actual data
  const data = [
    { label: "Remaining Limit", value: 22181.45, color: "bg-gray-500" },
  ];

  // Find the maximum value to scale the bars
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 flex-col">
          <div className="w-full flex justify-end p-2">
            <div className="w-32 text-right">
              {item.label}
              <br />
              255,555,000
            </div>
          </div>
          <div className="w-full">
            <div className="flex-1 h-4 bg-gray-200 rounded">
              <div
                className={`${item.color} h-full rounded`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarGraphSingle;
