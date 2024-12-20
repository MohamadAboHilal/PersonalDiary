import React, { useState, useEffect } from "react";

function FormPopup({ onClose, addEntry, entries }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [hasEntryForToday, setHasEntryForToday] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const entryExists = entries.some((entry) => entry.date === today);
    setHasEntryForToday(entryExists);
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { title, date, url, content };
    addEntry(newEntry);
    setTitle("");
    setDate(new Date().toISOString().split("T")[0]);
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
    <div className="form-popup-backdrop fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        {hasEntryForToday && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">Entry Already Exists</h1>
            <p className="text-gray-300">
              You have already added an entry for today. You can add an entry
              for another day.
            </p>
          </div>
        )}
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
