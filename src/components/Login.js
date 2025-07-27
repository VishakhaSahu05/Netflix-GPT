import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <form className="w-3/12 p-12 bg-black bg-opacity-80 text-white rounded-lg z-10">
          <h2 className="text-2xl mb-4 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 m-2 bg-gray-700 text-white rounded"
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-2 m-2 bg-gray-700 text-white rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 m-2 bg-gray-700 text-white rounded"
          />
          <button className="w-full p-3 m-2 bg-red-600 hover:bg-red-700 rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
