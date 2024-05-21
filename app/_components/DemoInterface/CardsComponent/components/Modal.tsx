import { ModalType } from "@/Types/Types";
import React from "react";

const Modal = ({ isOpen, onClose }: ModalType) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal duration-500 ease-in-out flex h-96 overflow-auto"
      onClick={() => onClose()}
    >
      <div
        className="modal-content bg-white p-4 "
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="border p-2 hover:bg-gray-50  ">
          Close
        </button>
        <h2 className="font-bold text-2xl pt-4 w-full">What do you need?</h2>
        <p className="text-xs text-gray-600 font-semibold pb-4">
          Create one or many cards for yourself or others.
        </p>

        <h3 className="font-bold text-3xl">New Requests</h3>
        <ul className="flex flex-col pt-2 w-full gap-2">
          <li className="p-4 items-center border hover:bg-gray-100 cursor-pointer">
            New Product or Service
          </li>
          <li className="p-4 items-center border hover:bg-gray-100  cursor-pointer">
            Virtual Card
          </li>
          <li className="p-4 items-center border hover:bg-gray-100  cursor-pointer">
            Physical Card
          </li>
        </ul>

        <h3 className="font-bold text-3xl">Company Programs</h3>
        <ul className="flex flex-col pt-2 gap-2">
          <li className="p-4 items-center border hover:bg-gray-100  cursor-pointer">
            Education Stipend
          </li>
          <li className="p-4 items-center border hover:bg-gray-100  cursor-pointer">
            Travel & Expenses
          </li>
          <li className="p-4 items-center border hover:bg-gray-100  cursor-pointer">
            Wellness Benefit
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
