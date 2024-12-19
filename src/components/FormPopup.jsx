import React, { useState, useEffect } from "react";

function FormPopup({ onClose }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { title, date, url, content };
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    existingEntries.push(newEntry);
    localStorage.setItem("entries", JSON.stringify(existingEntries));
    setTitle("");
    setDate("");
    setUrl("");
    setContent("");
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("form-popup-backdrop")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="form-popup-backdrop fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Diary Entry</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-start font-medium text-gray-300"
        >
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-md bg-[#CECECE] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 rounded-md bg-[#CECECE] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label>
            URL:
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-3 rounded-md bg-[#CECECE] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 rounded-md bg-[#CECECE] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-[#CECECE] text-[#1E1E1E] font-bold py-2 px-6 rounded-full hover:bg-[#cbcbcb] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPopup;
