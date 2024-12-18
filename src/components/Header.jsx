import React from "react";

function Header() {
  return (
    <header class="flex justify-between items-center px-8 py-4 bg-gray-900 w-full">
      <h1 class="text-5xl font-great-vibes text-white">Personal Diary</h1>
      <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300">
        Add Entry
      </button>
    </header>
  );
}

export default Header;
