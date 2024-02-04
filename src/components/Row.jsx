import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import Movie from "./Movie";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //axios says get me the link i will give you the response.
    axios.get(props.fetchURL).then((response) => {
      //then function leta hai
      // console.log(response.data);
      setMovies(response.data.results);
    });
  }, [props.fetchURL]);
  // console.log(movies);

  const sliderLeft = () => {
    var slider = document.getElementById("slider" + props.rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + props.rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className=" bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider" + props.rowId}
        >
          {movies.map((item, id) => (
            //{return}
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className=" bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
