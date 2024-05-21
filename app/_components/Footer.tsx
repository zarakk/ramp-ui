import Link from "next/link";
import React from "react";

const FooterArray = [
  { text: "about" },
  { text: "careers" },
  { text: "customers" },
  { text: "help center" },
  { text: "corporate cards" },
];
const Footer = () => {
  return (
    <div className="bg-[#efefef] w-full flex justify-around items-center relative">
      <div className=" p-4">
        {FooterArray?.map((link) => {
          return (
            <Link className="p-4 font-bold" href="/">
              {link.text}
            </Link>
          );
        })}
      </div>
      <div>
        <img
          src="footer-logo.svg"
          alt="ramp footer logo"
          className="w-24"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
