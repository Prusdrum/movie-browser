import { IMoviesState } from "./movies/moviesState";
import { IMovieDetailsState } from "./movieDetails/movieDetailsState";
import { IApplicationState } from "./application/applicationState";
import { ISearchState } from "./search/searchState";

export interface IRootState {
  movies: IMoviesState;
  movieDetails: IMovieDetailsState;
  application: IApplicationState;
  search: ISearchState;
}
