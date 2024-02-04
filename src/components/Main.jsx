import React, { useEffect, useState } from "react";
import requests from "../request";
import axios from "axios";
// import MoreInfo from "./MoreInfo";

const Main = () => {
  const [movies, setMovies] = useState([]);

  //
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestTopRated).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);

  const trunc = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[650px] text-white ">
        <div className="w-full h-full ">
          <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>

          <img
            className="w-full h-full object-cover "
            // src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.name}
          />
          <div className="absolute w-full top-[40%] p-4 md:p-8 ">
            <h1 className="text-3xl md:text-5xl font-bold ">{movie?.name}</h1>
            <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200 font-bold my-4">
              {/* trunc(original value , kitna kaatna hai(trucket) ) */}
              {trunc(movie?.overview, 150)}
            </p>
            <div className="my-4  ">
              <button className="border bg-gray-100 text-black border-gray-300 py-2 px-8 rounded hover:bg-white/70">
                Play
              </button>
              <button
                // onClick={info}
                className="border bg-[#4f4e4e] text-white border-gray-300 py-2 px-8 ml-4 rounded hover:bg-black/40 "
              >
                More Info
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released: {movie?.first_air_date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
