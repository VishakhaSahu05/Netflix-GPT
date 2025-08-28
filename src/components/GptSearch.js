import React from "react";
// import GptMovieSuggestion from "./GptMovieSuggestion";
// import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${BACKGROUND_IMG})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-40">
        {/* <GptSearchBar />
        <GptMovieSuggestion /> */}
      </div>
    </div>
  );
};

export default GptSearch;
