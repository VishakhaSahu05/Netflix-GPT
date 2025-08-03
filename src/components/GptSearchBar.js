import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  console.log("Current Language Key:", langKey);
   const currentLang = lang[langKey] || lang["en"];
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <form className="flex w-full max-w-3xl bg-gray-100 rounded-lg shadow-md overflow-hidden border border-gray-300">
        <input
          type="text"
          placeholder={currentLang.GptSearchPlaceHolder}
          className="flex-1 px-4 py-3 text-black bg-transparent outline-none placeholder-gray-500"
        />
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold">
         {currentLang. search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
