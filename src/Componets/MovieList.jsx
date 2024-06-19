import React from "react";
import { useWatchList } from "../Contexts";

function MovieList({ movieInfo }) {
  const { addWatchList } = useWatchList();

  return (
    <div className="">
      <h3>{movieInfo.Title}</h3>
      <img src={movieInfo.Poster} alt={movieInfo.Title} />
      <p>Year:{movieInfo.Year}</p>
      <button
        onClick={() => addWatchList(movieInfo)}
        className="bg-black text-white"
      >
        Add To watchList
      </button>
      <hr className="bg-black" />
    </div>
  );
}

export default MovieList;
