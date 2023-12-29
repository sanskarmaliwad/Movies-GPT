import React from "react";
import useFetchMovieTrailer from "../../../hooks/useFetchMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieId }) => {
  useFetchMovieTrailer(movieId); //Custom Hook

  const trailer = useSelector((store) => store.movies?.movieTrailer);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
