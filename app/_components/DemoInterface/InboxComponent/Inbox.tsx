// pages/index.tsx
import { useState } from "react";
import ExpenditureGraph from "../DashboardComponent/components/ExpenditureGraph";
import Dashboard from "../DashboardComponent/Dashboard";

type Email = {
  id: number;
  subject: string;
  body: string;
};

export default function Inbox() {
  // const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  // const emails: Email[] = [
  //   {
  //     id: 1,
  //     subject: "Welcome to our service",
  //     body: "Thank you for signing up...",
  //   },
  //   {
  //     id: 2,
  //     subject: "Your order has been shipped",
  //     body: "Your order #1234 has been shipped...",
  //   },
  // ];

  return (
    <div className="flex w-full">
      {/* <div className="w-64 bg-gray-100 overflow-y-scroll">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`p-4 hover:bg-gray-200 cursor-pointer ${
              selectedEmail?.id === email.id ? "bg-gray-300" : ""
            }`}
            onClick={() => setSelectedEmail(email)}
          >
            {email.subject}
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">
        {selectedEmail ? (
          <>
            <h1 className="text-xl font-bold mb-4">{selectedEmail.subject}</h1>
            <p>{selectedEmail.body}</p>
          </>
        ) : (
          <p>Select an email to read</p>
        )} */}
      <Dashboard />
    </div>
    // </div>
  );
}
