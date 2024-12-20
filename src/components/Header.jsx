import React, { useState } from "react";
import FormPopup from "./FormPopup";

function Header({ addEntry, entries }) {
  const [isFormPopupVisible, setFormPopupVisible] = useState(false);

  const toggleFormPopup = () => {
    setFormPopupVisible(!isFormPopupVisible);
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 w-full">
      <h1 className="text-5xl font-great-vibes text-white">Personal Diary</h1>
      <button
        className="bg-[#CECECE] text-[#1E1E1E] font-bold py-2 px-6 rounded-full hover:bg-[#cbcbcb] focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleFormPopup}
      >
        Add Entry
      </button>
      {isFormPopupVisible && (
        <FormPopup
          onClose={toggleFormPopup}
          addEntry={addEntry}
          entries={entries}
        />
      )}
    </header>
  );
}

export default Header;
