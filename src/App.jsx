import { useState, useEffect } from "react";
import { WatchListProvider } from "./Contexts/MovieContext";
import useMovieInfo from "./hooks/useMovieInfo";
import { InputForm, MovieList, MovieWatchList } from "./Componets";

function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const movieItem = useMovieInfo(searchQuery); // api call
  console.log(movieItem);

  const [watchList, setWatchList] = useState([]); // to store in local storage

  const addWatchList = (movieInfo) => {
    setWatchList((prev) => {
      const exists = prev.find((prev) => prev.imdbID === movieInfo.imdbID); // retruns boolean
      if (exists) {
        return prev;
      } else {
        return [movieInfo, ...prev]; // adding item to the array so dont do ...movieInfo
      }
    });
  };

  const toggleWatch = (id) => {
    setWatchList((prev) =>
      prev.map(
        (movieInfo) =>
          movieInfo.imdbID === id
            ? { ...movieInfo, watched: !movieInfo.watched } // Create a new object with updated 'watched' property
            : movieInfo, // Return the original object if 'id' doesn't match
      ),
    );
  };

  const removeWatchList = (id) => {
    // remove from watchlist
    setWatchList((prev) => prev.filter((movieInfo) => movieInfo.imdbID !== id));
  };

  // Load from local storage on mount
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")); // storedMovies == key
    if (storedMovies && storedMovies.length > 0) {
      setWatchList(storedMovies);
    }
  }, []);

  // Save to local storage on watchList change
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <WatchListProvider
      value={{
        movieItem,
        addWatchList,
        removeWatchList,
        toggleWatch,
        watchList,
      }}
    >
      <div className="w-1/2">
        <InputForm setSearchQuery={setSearchQuery} />
        {movieItem.map((movieInfo) => (
          <MovieList movieInfo={movieInfo} key={movieInfo.imdbID}></MovieList>
        ))}
      </div>
      <MovieWatchList />
    </WatchListProvider>
  );
}

export default App;
