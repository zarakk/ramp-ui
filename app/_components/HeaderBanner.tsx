import React from "react";
import DemoInterface from "./DemoInterface";

const HeaderBanner = () => {
  return (
    <div className="flex justify-evenly">
      <div className="text-white p-4 ">
        <h3 className="text-4xl font-bold py-2">
          spending made smarter with ramp
        </h3>
        <p className="pb-4 text-sm">
          Easy-to-use cards, spend limits, approval flows, vendor payments,
          <br /> and more — plus an average savings of 5%
        </p>
        <div className="cta flex gap-2">
          <input type="text" className="px-4 py-2 bg-inherit border" />
          <button className="bg-[#E4F222] px-4 py-2">get started</button>
        </div>
      </div>
      <div className="border p-4 w-2/4">
        <DemoInterface />
      </div>
    </div>
  );
};

export default HeaderBanner;
