import React from "react";
import ExpenditureGraph from "./components/ExpenditureGraph";
import { expenditures } from "@/constants/constants";
const Dashboard = () => {
  return (
    <div
      className="flex flex-col gap-4 overflow-auto w-full flex-1"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search & Filter"
          className="py-2 px-4  outline-none border-b-2 duration-100 border-r-slate-600 focus-within:border-r-slate-900"
        />
        <select
          name="paymentType"
          className="cursor-pointer border-b-2 duration-100 border-r-slate-600"
        >
          <option value="all">All</option>
          <option value="cards">Cards</option>
          <option value="reimbursements">Reimbursements</option>
          <option value="ach">ACH</option>
          <option value="checks">Checks</option>
          <option value="wires">Wires</option>
        </select>
        <select
          name="paymentType"
          className="cursor-pointer border-b-2 duration-100 border-r-slate-600"
        >
          <option value="all">This Month</option>
          <option value="cards">Cards</option>
          <option value="reimbursements">Reimbursements</option>
          <option value="ach">ACH</option>
          <option value="checks">Checks</option>
          <option value="wires">Wires</option>
        </select>
        <select
          name="paymentType"
          className="cursor-pointer border-b-2 duration-100 border-r-slate-600"
        >
          <option value="all">Daily</option>
          <option value="cards">Cards</option>
          <option value="reimbursements">Reimbursements</option>
          <option value="ach">ACH</option>
          <option value="checks">Checks</option>
          <option value="wires">Wires</option>
        </select>
      </div>

      <div className="flex p-4 ">
        <div className="flex flex-col gap-2">
          August Spend:
          <h2 className="font-bold text-3xl">$256,851</h2>
        </div>
        <div className="flex flex-col gap-2 px-4">
          August Cashback:
          <h2 className="font-bold text-3xl">$25,012.86</h2>
        </div>
      </div>
      <div>
        <ExpenditureGraph expenditures={expenditures} />
      </div>
    </div>
  );
};

export default Dashboard;
