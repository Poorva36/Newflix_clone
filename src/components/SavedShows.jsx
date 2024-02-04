import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { onSnapshot, updateDoc, doc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  console.log(user);
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const movieReference = doc(db, "users", `${user?.email}`);
  const removeWishlist = async (passesId) => {
    try {
      const result = movies.filter((item) => {
        return item.id !== passesId;
      });
      await updateDoc(movieReference, { wishlist: result });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.wishlist);
    });
  }, [user?.email]);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">shows</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className=" bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider"}
        >
          {movies.map((item, id) => (
            //{return}
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]
                cursor-pointer relative p-2 inline-block "
            >
              <img
                className="w-full h-auto block"
                //   key={id}
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="text-xs font-bold flex whitespace-normal md:text-sm justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                {/* removing wishlist item */}
                <p
                  onClick={() => removeWishlist(item.id)}
                  className=" absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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

export default SavedShows;
