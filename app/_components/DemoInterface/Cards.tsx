"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    { name: "OneBiteBig", holder: "Liddy Dione", utilization: "0%" },
    { name: "Elsie", holder: "James Smith", utilization: "0%" },
    { name: "Education Stipend", holder: "Linda Davis", utilization: "0%" },
    { name: "Romantic (Temporary)", holder: "Linda Davis", utilization: "0%" },
    { name: "Harold A", holder: "Lenny Dione", utilization: "0%" },
    { name: "Mark Goldberger", holder: "Linda Davis", utilization: "0%" },
    { name: "Heavy Metal Card", holder: "Lenny Dione", utilization: "0%" },
    { name: "Jacob Schwartz", holder: "James Smith", utilization: "0%" },
    { name: "Cory Greenberg", holder: "James Smith", utilization: "0%" },
    { name: "Transportation", holder: "Linda Davis", utilization: "0%" },
  ];

  return (
    <div className="p-4">
      <h3 className="text-3xl pb-4 font-bold">Cards</h3>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Cards"
          className="border p-2 rounded"
        />
        <div className="flex gap-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="border p-2 hover:bg-gray-50"
          >
            Create Card
          </button>
        </div>
      </div>

      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      ) : (
        <>
          <table className="w-full text-left p-2">
            <thead>
              <tr>
                <th>Card</th>
                <th>Cardholder</th>
                <th>Utilization</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card, index) => (
                <tr key={index} className="hover:bg-gray-50 cursor-pointer p-4">
                  <td className="py-2">{card.name}</td>
                  <td className="py-2">{card.holder}</td>
                  <td className="py-2">{card.utilization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default Cards;
