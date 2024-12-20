import React, { useState, useEffect } from "react";

function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);

  const handleViewClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-slate-900 rounded-xl shadow-md font-great-vibes">
      <h1 className="text-3xl mb-6 text-center">
        Diary speaks where words fail
      </h1>
      {entries.length === 0 ? (
        <p className="text-center text-gray-500">No entries found.</p>
      ) : (
        <div className="flex flex-wrap gap-10">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="items-center text-white p-2 rounded-lg shadow-md size-80 "
            >
              <div className="flex size-80 gap-2">
                <div>
                  <img
                    className="max-w-40 object-cover justify-left"
                    src={entry.url}
                    alt={entry.title}
                  />
                </div>
                <div className="p-1">
                  <h2 className="block mt-1 text-2xl leading-tight text-blue-300 justify-around">
                    {entry.title}
                  </h2>
                  <p className="mt-0.5 text-l text-blue-300">{entry.date}</p>
                  <div className="justify-items-end">
                    <button className=" bg-blue-500 text-white p-8 px-4 py-2 rounded-full text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EntryList;
