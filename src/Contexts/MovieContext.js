import { createContext, useContext } from "react";

export const WatchList = createContext({
  movieItem: [],
  toggleWatch: () => {},
  watchList: [],
  addWatchList: () => {},
  removeWatchList: () => {},
});
export const WatchListProvider = WatchList.Provider;
export const useWatchList = () => useContext(WatchList);
