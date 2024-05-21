"use client";
import { useState } from "react";
import Inbox from "./DemoInterface/InboxComponent/Inbox";
import Cards from "./DemoInterface/CardsComponent/Cards";
import Travel from "./DemoInterface/TravelComponent/Travel";
import EmployeeProgram from "./DemoInterface/EmployeeComponent/EmployeeProgram";
import Reporting from "./DemoInterface/ReportingComponent/Reporting";
import { SidebarProps } from "@/Types/Types";
import { sections } from "@/constants/constants";

const Sidebar = ({
  sections,
  activeSection,
  setActiveSection,
}: SidebarProps) => {
  return (
    <div className="sidebar flex flex-col items-start w-16 px-1">
      {sections.map((section: string) => (
        <button
          key={section}
          className={
            activeSection === section
              ? "active  bg-gray-200 p-4 w-full rounded"
              : "p-4 hover:bg-gray-200 duration-300 ease-in-out border-radius-300 w-full rounded"
          }
          onClick={() => setActiveSection(section)}
        >
          <img className="bg-contain" src={`/${section}.svg`} />
        </button>
      ))}
    </div>
  );
};

const DemoInterface = () => {
  const [activeSection, setActiveSection] = useState("Inbox");

  return (
    <div className="app flex text-black bg-[#f6f5f5] w-full">
      <div
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div
        className="content p-4 text-black bg-white w-full h-144 overflow-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {activeSection === "Inbox" && <Inbox />}
        {activeSection === "Settings" && <Reporting />}
        {activeSection === "Payments" && <EmployeeProgram />}
        {activeSection === "Cards" && <Cards />}
        {activeSection === "Travel" && <Travel />}
      </div>
    </div>
  );
};

export default DemoInterface;
