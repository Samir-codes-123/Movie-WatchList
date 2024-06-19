import { useEffect, useState } from "react";

function useMovieInfo(movie) {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      if (!movie) return;
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${movie}&apikey=46d365ca`,
        );
        const data = await response.json();
        data.Search
          ? setMovieInfo(
              data.Search.map((movieObj) => {
                return { ...movieObj, watched: false };
              }),
            )
          : setMovieInfo([]);
      } catch (error) {
        alert(error);
      }
    };
    fetchApi();
  }, [movie]);
  return movieInfo;
}

export default useMovieInfo;
