import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { validate } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/appStore/userSlice";
import { BACKGROUND_IMAGE } from "../../utils/constants/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, SetIsSignIn] = useState(true);
  const [errorMessages, setErrorMessages] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(null);

  // const showLoader = useSelector((store) => store.config.showLoader);

  // Toggle between sign in and sign up form
  const handleSwitchButton = () => {
    setEmail("");
    setPassword("");
    setFullName(null);
    SetIsSignIn(!isSignIn);
  };

  // handle validation of form feildss

  const handleButtonClick = () => {
    const errors = validate(email, password, fullName);

    //If errors exists
    if (Object.keys(errors).length != 0) return;

    //sign in and sign up flow
    if (!isSignIn) {
      //Sign Up Logic

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessages({
                firebaseError: errorMessage,
              });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages({
            firebaseError: errorMessage,
          });
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages({
            firebaseError: "Incorrect email or password. Please try again!",
          });
        });
    }
  };

  return (
    <div>
      <Header />
      {/* background-image  */}
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background-img" />
      </div>
      {/* Login form */}
      <form className="absolute p-6 pb-28 bg-black text-white w-3/12 my-36 mx-auto left-0 right-0 flex flex-wrap flex-col bg-opacity-80 rounded-lg">
        <h1 className="font-semibold text-3xl mb-4 p-2 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {errorMessages.firebaseError && (
          <p className="m-3 text-sm bg-orange-400 p-2">
            {errorMessages.firebaseError}
          </p>
        )}

        {!isSignIn && (
          <>
            <input
              value={fullName}
              type="text"
              placeholder="Full Name"
              className="p-3 m-3 bg-gray-700 rounded-sm"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            ></input>
            <p className="mx-3 text-red-600 text-sm">
              {errorMessages?.fullName}
            </p>
          </>
        )}

        <input
          value={email}
          type="text"
          placeholder="Email Address"
          className="p-3 m-3 bg-gray-700 rounded-sm"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <p className="mx-3 text-red-600 text-sm">{errorMessages?.email}</p>

        <input
          value={password}
          type="password"
          placeholder="Password"
          className="p-3 m-3 bg-gray-700 rounded-sm"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <p className="mx-3 text-red-600 text-sm">{errorMessages?.password}</p>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick();
          }}
          className="p-3 m-3 mt-10 shinyred rounded-sm"
        >
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={() => {
            handleSwitchButton();
            setErrorMessages({});
          }}
          className="mx-3 mt;
        -4 cursor-pointer"
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already on Netflix? Sign in now."}
        </p>
      </form>
      ß
    </div>
  );
};

export default Login;
