"use client";
import { useState } from "react";
import Inbox from "./DemoInterface/Inbox";
import Dashboard from "./DemoInterface/Dashboard";
import Cards from "./DemoInterface/Cards";
import Travel from "./DemoInterface/Travel";
import EmployeeProgram from "./DemoInterface/EmployeeProgram";
import Reporting from "./DemoInterface/Reporting";

const Sidebar = ({ sections, activeSection, setActiveSection }: any) => {
  return (
    <div className="sidebar flex flex-col items-start w-16 px-1">
      {sections.map((section: any) => (
        <button
          key={section}
          className={
            activeSection === section
              ? "active  bg-gray-100 p-4 w-full rounded"
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

const Payments = () => <div>Payments</div>;

const DemoInterface = () => {
  const [activeSection, setActiveSection] = useState("Inbox");
  const sections = ["Inbox", "Settings", "Payments", "Cards", "Travel"];

  return (
    <div className="app flex text-black bg-gray-300 w-full">
      <div>
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div className="content p-4 text-black bg-white w-full">
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
