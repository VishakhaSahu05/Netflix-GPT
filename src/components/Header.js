import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
          <img className="w-10 h-10 rounded-md" alt="usericon" src={USER_ICON} />
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
