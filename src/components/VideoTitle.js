import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-8 md:px-16 absolute text-white bg-gradient-to-r from-black w-full h-screen">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{title}</h1>
      <p className="text-md md:text-lg font-medium max-w-xl mb-6 text-gray-200">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black py-2 px-6 text-lg font-semibold rounded hover:bg-opacity-80 transition duration-200">
          ▶️ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white py-2 px-6 text-lg font-semibold rounded hover:bg-opacity-50 transition duration-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
