import React from "react";

const Travel = () => {
  return (
    <div className="overflow-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Travel & Expenses</h1>
      <h2 className="text-xl mb-2">Employee Travel & Expenses Spend Program</h2>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="border p-2 rounded">
          <h3>Spend Limit</h3>
          <p>$1,000.00 / Quarterly</p>
        </div>
        <div className="border p-2 rounded">
          <h3>Max Transaction Amount</h3>
          <p>$750.00</p>
        </div>
        <div className="border p-2 rounded">
          <h3>Auto-Lock Date</h3>
          <p>Dec 31, 2023</p>
        </div>
      </div>

      <button className="border p-2 hover:bg-gray-50 mb-4">
        Edit Spend Program
      </button>

      <h2 className="text-xl mb-2">Payment Options</h2>
      <div className="flex gap-4 mb-4">
        <button className="border p-2 hover:bg-gray-50">Virtual Card</button>
        <button className="border p-2 hover:bg-gray-50">Physical Card</button>
        <button className="border p-2 hover:bg-gray-50">Reimbursements</button>
      </div>

      <h2 className="text-xl mb-2">Spend Controls</h2>
      <h3 className="mb-2">Merchant Restrictions</h3>
      <div className="flex gap-4 mb-4">{/* Add merchant logos here */}</div>
      <h3 className="mb-2">Category Restrictions</h3>
      <div className="flex gap-4 mb-4">
        <button className="border p-2 hover:bg-gray-50">
          Alcohol and Bars
        </button>
        <button className="border p-2 hover:bg-gray-50">Entertainment</button>
        <button className="border p-2 hover:bg-gray-50">Gambling</button>
        <button className="border p-2 hover:bg-gray-50">
          Clubs and memberships
        </button>
      </div>

      <h2 className="text-xl mb-2">Policies</h2>
      <h3 className="mb-2">Card Transactions</h3>
      <ul className="list-disc ml-5 mb-4">
        <li>Receipt required for all transactions</li>
        <li>Memo required for all transactions</li>
        <li>QuickBooks Customer/Job required for all transactions</li>
      </ul>
      <h3 className="mb-2">Out of Pocket Reimbursements</h3>
      <ul className="list-disc ml-5 mb-4">
        <li>Receipt required for reimbursements of at least $75.00</li>
        <li>Memo required for all reimbursements</li>
      </ul>
    </div>
  );
};

export default Travel;
