"use client";
import React, { useState } from "react";
import Modal from "./components/Modal";
import { cards } from "@/constants/constants";

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <div
      // className={`Cardtable h-full ${
      //   isModalOpen ? "bg-gray-400 pointer-events-none overflow-hidden" : ""
      // }`}
      >
        {/* <div className="relative h-full">
          <div
            className={`absolute right-0 top-0 border overflow-auto transition-width duration-500 ease-in-out ${
              isModalOpen ? "w-1/2 bg-white" : "w-0"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {isModalOpen && (
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            )}
          </div>
        </div> */}
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
      </div>
    </div>
  );
};
export default Cards;
