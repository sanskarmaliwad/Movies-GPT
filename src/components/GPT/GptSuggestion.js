import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";
import Loader from "../Loader/Loader";

const GptSuggestion = () => {
  const moviesNames = useSelector((store) => store.gpt.moviesSuggestedByGpt);
  const showLoader = useSelector((store) => store.config.showLoader);

  const moviesSuggested = useSelector(
    (store) => store.gpt.moviesFetchedFromTmdb
  );

  if (!moviesNames && showLoader == false) return null;

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="p-4 m-4 bg-black bg-opacity-80">
          {moviesNames?.map((movie, index) => (
            <MovieList
              key={movie}
              title={movie}
              movies={moviesSuggested[index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GptSuggestion;
