import React from "react";
import { useWatchList } from "../Contexts";

function MovieWatchList() {
  const { watchList, toggleWatch, removeWatchList } = useWatchList();
  return (
    <div className="float-right w-1/2 m-0">
      <h1>WatchList:</h1>
      <ul>
        {watchList &&
          watchList.map((movieInfo) => (
            <li key={movieInfo.imdbID}>
              <h2>{movieInfo.Title}</h2>
              <p>{movieInfo.watched ? "watched" : "not Watched"}</p>
              <button onClick={() => toggleWatch(movieInfo.imdbID)}>
                Toggle
              </button>{" "}
              <br />
              <button
                onClick={() => {
                  removeWatchList(movieInfo.imdbID);
                }}
              >
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MovieWatchList;
