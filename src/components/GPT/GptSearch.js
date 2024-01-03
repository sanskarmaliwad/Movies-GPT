import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BACKGROUND_IMAGE } from "../../utils/constants/constants";


const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMAGE} alt="background-img" />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
