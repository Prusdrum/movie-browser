import { IApiMovie } from "../types/api/IApiMovie";
import { IMovie } from "../types/state/IMovie";
import { EMPTY_API_VALUE } from '../constants';
import { IApiSearchMovie } from "../types/api/IApiSearchResponse";
import { IMovieSearchResult } from "../types/state/IMovieSearchResult";

export const movieFromApi = (response: IApiMovie): IMovie => {
  return {
    id: response.imdbID,
    genre: response.Genre,
    language: response.Language,
    plot: response.Plot,
    poster: response.Poster === EMPTY_API_VALUE ? '' : response.Poster,
    rating: Number.parseFloat(response.imdbRating),
    votes: response.imdbVotes,
    title: response.Title,
    year: response.Year,
    actors: response.Actors,
    director: response.Director,
    runtime: response.Runtime,
    writer: response.Writer,
    released: response.Released,
  };
};

export const searchResultFromApi = (response: IApiSearchMovie): IMovieSearchResult => {
  return {
    id: response.imdbID,
    title: response.Title,
    poster: response.Poster === EMPTY_API_VALUE ? '' : response.Poster,
    year: response.Year,
  }
}