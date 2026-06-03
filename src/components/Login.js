import React, { useRef, useState } from "react";
import { SwiggyLogInPageImg } from "../utils/constants";
import validateData from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();

  const handelSignInSignUpToggle = () => {
    setisSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleButtonClick = () => {
    const userNameValue = isSignIn ? "" : userName.current.value;

    const message = validateData(
      userNameValue,
      email.current.value,
      password.current.value,
      isSignIn,
    );

    seterrorMessage(message);

    if(message) return;

    if (!isSignIn) {
      //sign Up

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, {
            displayName: userName.current.value,
          })
          // Signed up
          const user = userCredential.user;
          navigate("/");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" + errorMessage);
  });
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src={SwiggyLogInPageImg}
        className="absolute inset-0 w-full h-full object-cover blur-[0.75px]"
      ></img>

      <div className="absolute inset-0 flex justify-center items-center">
        <form
          className="bg-black/65 p-12 flex flex-wrap flex-col gap-3.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-2xl text-white font-bold pb-2.5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={userName}
              placeholder="Name"
              type="text"
              className="border border-gray-200 text-white p-2 mt-2"
            ></input>
          )}

          <input
            ref={email}
            placeholder="Email"
            type="email"
            className="border border-gray-200 text-white p-2 mt-2"
          ></input>
          <input
            ref={password}
            placeholder="Password"
            type="password"
            className="border border-gray-200 text-white p-2 mt-2"
          ></input>

          <button
            className="bg-amber-600 rounded-lg p-2 cursor-pointer mt-1"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-red-600">{errorMessage}</p>

          {isSignIn ? (
            <p className="text-white text-sm">
              New to Namaste Food?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={handelSignInSignUpToggle}
              >
                Sign Up here.
              </span>
            </p>
          ) : (
            <p className="text-white text-sm">
              Already Registered?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={handelSignInSignUpToggle}
              >
                Sign In here.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
