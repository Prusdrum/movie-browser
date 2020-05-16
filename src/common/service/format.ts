import { IMovie } from "../types/state/IMovie";
import { EMPTY_API_VALUE } from "../constants";
import { IMovieSearchResult } from "../types/state/IMovieSearchResult";

export const getMovieTitle = (movie: IMovie | IMovieSearchResult) => {
  if (movie.year === '' || movie.year === EMPTY_API_VALUE) {
    return movie.title
  }

  return `${movie.title} (${movie.year})`;
};
