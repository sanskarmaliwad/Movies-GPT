import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageDetails } from "../../utils/constants/languageConstants";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants/constants";
import {
  addMoviesFetchedFromTmtb,
  addMoviesSuggestedByGpt,
} from "../../utils/appStore/gptSlice";
import { setShowLoader } from "../../utils/appStore/configSlice";

const GptSearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const lang = useSelector((store) => store.config.language);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };

  const handleSearchButton = async () => {
    dispatch(setShowLoader());

    const query =
      "Act as a movie recommendation system and sugges some movies for the query: " +
      searchText +
      ". only give me 5 movies, comma separated like the example given ahead: Golamaal, MS Dhoni, Dunki, Fukrey, KGF";

    const gptResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const movies = gptResponse?.choices[0]?.message?.content.split(",");
    const fetchedMoviesPromises = movies.map((movie) => searchMovie(movie));
    const fetchedMovies = await Promise.all(fetchedMoviesPromises);
    dispatch(addMoviesSuggestedByGpt(movies));
    dispatch(addMoviesFetchedFromTmtb(fetchedMovies));
    
    if (fetchedMovies) {
      dispatch(setShowLoader());
    }
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languageDetails[lang].placeholder}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="m-4 py-2 px-4 col-span-3 shinyred rounded-lg text-white"
          onClick={handleSearchButton}
        >
          {languageDetails[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
