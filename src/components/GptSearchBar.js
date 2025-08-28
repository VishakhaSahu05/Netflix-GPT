// import { useSelector } from "react-redux";
// import lang from "../utils/languageConstants";
// import { useRef } from "react";
// import openai from "../utils/openai";
// import { API_OPTIONS } from "../utils/constants";

// const GptSearchBar = () => {
//   const langKey = useSelector((store) => store.config?.lang);
//   const currentLang = lang[langKey] || lang["en"];
//   const searchText = useRef(null);
//   const searchMovieTMDB = async(movie) => {
//     const data = await fetch (
//       fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', API_OPTIONS)
//     )
//   }
//   const handleGptSearchClick = async () => {
//     console.log(searchText.current.value);
//     //Make an API call to GPT API and get Movie Result
//     const gptQuery =
//       "Act as a Movie Recommendation system and suggest some movie for the query : " +
//       searchText.current.value +
//       " . only give me name of 5 movies , comma seperated like the example result give ahead : Example Result:Gaddar , Sholay , Om Shanti Om , Sultan , Saiyaara";

//     const gptResult = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages: [
//         { role: "system", content: "You are a helpful movie recommendation assistant." },
//         { role: "user", content: gptQuery },
//       ],
//     });
//     if(!gptResult.choices){
//        //{complete this yourself}
//     }
//     console.log(gptResult.choices?.[0]?.message?.content);
//     const gptMovies = gptResult.choices?.[0]?.message?.content.split(",")
//   };
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-transparent">
//       <form
//         className="flex w-full max-w-3xl bg-gray-100 rounded-lg shadow-md overflow-hidden border border-gray-300"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           ref={searchText}
//           type="text"
//           placeholder={currentLang.GptSearchPlaceHolder}
//           className="flex-1 px-4 py-3 text-black bg-transparent outline-none placeholder-gray-500"
//         />
//         <button
//           className="bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold"
//           onClick={handleGptSearchClick}
//         >
//           {currentLang.search}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GptSearchBar;
