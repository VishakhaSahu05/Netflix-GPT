import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen fixed top-0 left-0 bg-gradient-to-b from-black z-50 flex items-center justify-between px-8 py-4">
      <img className="w-44 md:w-56" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <select
              className="bg-black/70 text-white px-4 py-2 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-black/90 transition duration-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-2 my-2 bg-red-600 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
           {showGptSearch?"Home-Page" : "GPT Search"} 
          </button>
          <img
            className="w-10 h-10 rounded-md"
            alt="usericon"
            src={USER_ICON}
          />
          <button
            onClick={handleSignOut}
            className="text-white hover:underline"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
