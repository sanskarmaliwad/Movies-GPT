import React from "react";
import { useSelector } from "react-redux";
import {languageDetails} from "../../utils/constants/languageConstants"


const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.language)
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languageDetails[lang].placeholder}
        ></input>
        <button className="m-4 py-2 px-4 col-span-3 shinyred rounded-lg text-white">
          {languageDetails[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
