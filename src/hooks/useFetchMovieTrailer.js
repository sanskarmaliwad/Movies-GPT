import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants/constants";
import { addMovieTrailer } from "../utils/appStore/movieSlice";
import { useEffect } from "react";

const useFetchMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

  //Fetch Movies and store trailer
  const fetchMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const allVideos = json?.results;
    const filterData = allVideos.filter((item) => {
      if (item.type == "Trailer") return item;
    });

    const trailer = filterData.length ? filterData[0] : allVideos[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    fetchMovieVideo();
  }, []);
};

export default useFetchMovieTrailer;
