const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-32 px-12 bg-gradient-to-r from-black via-transparent to-transparent text-white">
      <h1 className="text-6xl font-extrabold mb-4">{title}</h1>
      <p className="text-xl leading-relaxed max-w-2xl">{overview}</p>
      <div className="mt-6 space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 font-semibold">
          ▶ Play
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
