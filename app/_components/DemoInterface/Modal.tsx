import React from "react";

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal relative overflow-auto h-96 duration-500 ease-in-out inset-0 bg-opacity-50 flex items-center justify-center w-full"
      onClick={() => onClose()}
    >
      <div
        className="modal-content bg-white p-4 "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-bold text-3xl">What do you need?</h2>
        <p className="text-xs text-gray-600 font-semibold">
          Create one or many cards for yourself or others.
        </p>

        <h3 className="font-bold text-3xl">New Requests</h3>
        <ul className="flex flex-col pt-2 w-full gap-2">
          <li className="p-4 items-center border">New Product or Service</li>
          <li className="p-4 items-center border">Virtual Card</li>
          <li className="p-4 items-center border">Physical Card</li>
        </ul>

        <h3 className="font-bold text-3xl">Company Programs</h3>
        <ul className="flex flex-col pt-2 gap-2">
          <li className="p-4 items-center border">Education Stipend</li>
          <li className="p-4 items-center border">Travel & Expenses</li>
          <li className="p-4 items-center border">Wellness Benefit</li>
        </ul>

        <button onClick={onClose} className="border p-2 hover:bg-gray-50">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
