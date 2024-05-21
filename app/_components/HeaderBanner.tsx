// import React from "react";
// import DemoInterface from "./DemoInterface";

// const HeaderBanner = () => {
//   return (
//     <div className="flex justify-evenly">
//       <div className="text-white p-4 ">
//         <h3 className="text-5xl font-bold py-2">
//           spending made smarter with ramp
//         </h3>
//         <p className="pb-4 text-sm">
//           Easy-to-use cards, spend limits, approval flows, vendor payments,
//           <br /> and more — plus an average savings of 5%
//         </p>
//         <div className="cta flex gap-2">
//           <input type="text" className="px-4 py-2 bg-inherit border" />
//           <button className="bg-[#E4F222] px-4 py-2">get started</button>
//         </div>
//       </div>
//       <div className="border p-4 w-2/4">
//         <DemoInterface />
//       </div>
//     </div>
//   );
// };

// export default HeaderBanner;

import React from "react";
import DemoInterface from "./DemoInterface";
import { IconsType } from "@/Types/Types";
import { icons } from "@/constants/constants";
import Image from "next/image";

const IconComponent = ({ icon, description }: IconsType) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={icon} className="w-12" alt={icon}></Image>
      <p>{description}</p>
    </div>
  );
};

const HeaderBanner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 max-w-screen-2xl mx-auto">
        <div className="text-white text-center md:text-left p-4 h-96 w-2/4">
          <h3 className="text-7xl font-bold py-6">
            Spending made smarter with Ramp
          </h3>
          <p className="pb-4 text-md pr-8">
            Easy-to-use cards, spend limits, approval flows, vendor payments,
            and more — plus an average savings of 5%
          </p>
          <div className="cta flex gap-2 justify-center md:justify-start">
            <input type="text" className="px-4 py-2 bg-inherit border" />
            <button className="bg-[#E4F222] px-4 py-2 text-black font-bold">
              Get Started
            </button>
          </div>
        </div>
        <div
          className=" p-4 w-2/4"
          style={{
            transform: "perspective(800px) rotateY(-8deg)",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.024) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px, rgba(0, 0, 0, 0.1) 0px 20px 30px 0px",
          }}
        >
          <DemoInterface />
        </div>
      </div>
      <div className="flex gap-4 justify-between text-white p-10 bg-[#2f4842] mt-10">
        {icons.map(({ icon, description }, key) => (
          <IconComponent icon={icon} description={description} key={key} />
        ))}
      </div>
    </>
  );
};

export default HeaderBanner;
