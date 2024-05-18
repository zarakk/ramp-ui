// import React from "react";
// import Navbar from "./Navbar";
// import HeaderBanner from "./HeaderBanner";
// import LandingTransition from "./LandingTransition";

// const LandingBanner = () => {
//   return (
//     <div
//       className="bg-[#17332d] w-full relative"
//       style={{
//         scrollSnapType: "y mandatory",
//         overflowY: "scroll",
//         height: "100vh", // Adjust this value as needed
//         scrollbarWidth: "none",
//         msOverflowStyle: "none",
//       }}
//     >
//       <div
//         className="h-screen z-50 relative bg-[#17332d]"
//         style={{ scrollSnapAlign: "start" }}
//       >
//         <Navbar />
//         <HeaderBanner />
//       </div>
//       <div
//         style={{
//           scrollSnapAlign: "start",
//           height: "1000px",
//           background: "black",
//         }}
//       >
//         <LandingTransition />
//       </div>
//       <div className=" pointer-events-none fixed top-0 left-0 bottom-0 flex items-center justify-start z-10 m-28">
//         <img src="/HomeCard.webp" className="w-1/2" alt="Card" />
//       </div>
//     </div>
//   );
// };

// export default LandingBanner;

import React from "react";
import Navbar from "./Navbar";
import HeaderBanner from "./HeaderBanner";
import LandingTransition from "./LandingTransition";

const LandingBanner = () => {
  return (
    <div className="bg-[#17332d] w-full">
      <div className="h-screen">
        <Navbar />
        <HeaderBanner />
      </div>

      <div
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "1000px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          background: "black",
        }}
      >
        <LandingTransition />
      </div>
    </div>
  );
};

export default LandingBanner;
