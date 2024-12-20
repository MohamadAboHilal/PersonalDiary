import React from "react";

const Modal = ({ entry, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-3xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-600 text-white rounded-full px-3 py-1 hover:bg-gray-500 focus:outline-none"
        >
          X
        </button>

        <div className="flex">
          {/* Left Image Section */}
          <div className="w-1/3">
            <img
              src={entry.url}
              alt={entry.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-2/3 p-6 text-white font-great-vibes">
            <h2 className="text-4xl text-blue-300 mb-2">{entry.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{entry.date}</p>
            <p className="text-base leading-relaxed text-gray-300">
              {entry.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
