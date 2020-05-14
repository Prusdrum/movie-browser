import { IApiMovie } from "../types/api/IApiMovie";
import { IMovie } from "../types/state/IMovie";

export const movieFromApi = (response: IApiMovie): IMovie => {
  return {
    id: response.imdbID,
    genre: response.Genre,
    language: response.Language,
    plot: response.Plot,
    poster: response.Poster,
    rating: response.imdbRating,
    votes: response.imdbVotes,
    title: response.Title,
    year: response.Year,
  };
};
