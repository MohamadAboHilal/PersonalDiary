import React from "react";

function EntryList({ entries }) {
  const handleViewClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <h1 className="text-4xl text-white mb-8 font-great-vibes">
        Diary Speaks Where Words Fail
      </h1>
      {entries.length === 0 ? (
        <p className="text-center text-gray-500">No entries found.</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center px-4 w-full">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="flex flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-3xl min-w-[320px]"
            >
              {/* Image Section */}
              <div className="w-[180px] h-[200px]">
                <img
                  src={entry.url}
                  alt={entry.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-1/2 flex flex-col justify-between p-4 relative">
                {/* Title and Date */}
                <div className="absolute top-4 right-4 text-right">
                  <h2 className="text-white text-2xl font-great-vibes">
                    {entry.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">{entry.date}</p>
                </div>

                {/* View Button */}
                <div className="absolute bottom-4 right-4 z-10">
                  <button
                    // onClick=""
                    className="bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    View
                  </button>
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
