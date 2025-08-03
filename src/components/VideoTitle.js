import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white px-10 flex flex-col justify-center bg-gradient-to-r from-black z-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg w-1/2">{overview}</p>
      <div className="mt-4 flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
