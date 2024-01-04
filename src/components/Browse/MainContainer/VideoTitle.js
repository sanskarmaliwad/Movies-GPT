import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] pl-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold w-1/3 text-xl md:text-5xl pb-7">{title}</h1>
      <p className="hidden md:w-1/4 md:inline-block text-sm md:text-lg pb-7">{overview}</p>
      <div>
        <button className="p-1 md:p-3.5 px-5 md:px-11 text-xl md:text-2xl rounded-md bg-white text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  p-3.5 px-11 bg-gray-400 text-2xl rounded-md text-white bg-opacity-50 hover:bg-opacity-80 ">
        More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
