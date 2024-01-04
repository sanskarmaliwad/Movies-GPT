import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BACKGROUND_IMAGE } from "../../utils/constants/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BACKGROUND_IMAGE} alt="background-img" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
