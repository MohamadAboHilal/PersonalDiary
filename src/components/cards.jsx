import React from "react";

const Card = ({ data }) => {
  return (
    <div className="max-w-md mx-auto bg-neutral-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl font-great-vibes">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-48"
            src={data.url}
            alt={data.title}
          />
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-4xl leading-tight font-medium text-blue-300">
            {data.title}
            <div className="mt-0.5 text-xl text-blue-300">{data.date}</div>
          </h2>
          {/* <p className="mt-2 text-2xl text-slate-300">{data.content}</p> */}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const data = {
    content:
      "Today's hike was incredible. The trail started gently, but as I climbed, the forest gave way to rocky paths and snowy patches. At the summit, the view was breathtaking—valleys below, rivers like silver threads, and a vast, peaceful sky above.\n\nSitting there, I felt a deep sense of accomplishment and connection with nature. The silence was calming, a reminder of how small yet significant we are in the grand scheme. Coming down, I carried that peace with me, already dreaming of the next climb.",
    date: "18-12-2024",
    title: "Test",
    url: "https://media.wired.com/photos/5954853a8e8cc150fa8ec286/191:100/w_1280,c_limit/plate_14.jpg",
  };

  return <Card data={data} />;
}
