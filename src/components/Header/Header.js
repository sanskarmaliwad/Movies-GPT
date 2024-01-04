import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/appStore/userSlice";
import { LANGUAGE_OPTIONS } from "../../utils/constants/constants";
import { toggleGPTSearch } from "../../utils/appStore/gptSlice";
import { setLanguage } from "../../utils/appStore/configSlice";
import LOGO from "../../Images/LOGO.png"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error"); //TO BUILD
      });
  };

  const handleToggleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };

  const handleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // console.log("User logged out");
        dispatch(removeUser());
        navigate("/Movies-GPT");
      }
    });
  }, []);

  return (
    <div className="absolute w-screen px-5 py-1 bg-gradient-to-b from-black z-10 flex flex-col mx-auto justify-between md:flex-row">
      <img className="mx-auto w-41 h-16 md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex place-content-center mt-auto mb-auto mr-4 text-white align-middle">
          {showGPTSearch && (
            <select
              className="px-3 py-1.5 rounded-md w-32 bg-gray-700"
              onChange={handleLanguage}
            >
              {LANGUAGE_OPTIONS.map((lang) => (
                <option key = {lang.key} value={lang.key}>{lang.value}</option>
              ))}
            </select>
          )}

          <button
            onClick={handleToggleGPTSearch}
            className="px-3 py-1.5 rounded-md mx-3 bg-purple-600 "
          >
            {showGPTSearch ? "Home Page" : "GPT Search" }
          </button>
          <button
            onClick={handleSignOut}
            className="px-3 py-1.5 rounded-md shinyred"
          >
            Sign out
          </button>
          {/* <p>({user?.displayName}) </p> */}
        </div>
      )}
    </div>
  );
};

export default Header;
