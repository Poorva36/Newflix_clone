import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);
  const movieId = doc(db, "users", `${user?.email}`);

  console.log(movieId);
  const savesShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);

      await updateDoc(movieId, {
        wishlist: arrayUnion({
          id: item?.id,
          title: item?.title ? item?.title : item?.name,
          img: item?.backdrop_path,
        }),
      });
    } else {
      alert("please login to save a movie");
    }
  };

  return (
    <>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]
            cursor-pointer relative p-2 inline-block "
      >
        <img
          className="w-full h-auto block"
          //   key={id}
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.name}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="text-xs font-bold flex whitespace-normal md:text-sm justify-center items-center h-full text-center">
            {item?.name ? item?.name : item?.title}
          </p>
          <p onClick={savesShow}>
            {/* //conditional rendering on like */}
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
