import React from "react";

const Modal = ({ entry, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full"
        >
          X
        </button>
        <img
          src={entry.url}
          alt={entry.title}
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{entry.date}</p>
        <p className="text-base">{entry.content}</p>
      </div>
    </div>
  );
};

export default Modal;
