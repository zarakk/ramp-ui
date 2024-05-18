import React from "react";
import ExpenditureGraph from "./ExpenditureGraph";
type Expenditure = {
  category: string;
  amounts: number[];
};
const Dashboard = () => {
  const expenditures: Expenditure[] = [
    { category: "Groceries", amounts: [200, 450, 700, 2250, 3200] },
    { category: "Rent", amounts: [3000, 4050, 5100, 6150, 7200] },
    { category: "Entertainment", amounts: [2150, 3200, 4250, 5300, 5350] },
    { category: "Transportation", amounts: [150, 300, 450, 600, 750] },
    { category: "Utilities", amounts: [100, 200, 300, 400, 500] },
  ];

  return (
    <div className="flex flex-col gap-4 overflow-auto w-full flex-1">
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
