import { IMoviesState } from "./movies/moviesState";
import { IMovieDetailsState } from "./movieDetails/movieDetailsState";
import { IApplicationState } from "./application/applicationState";

export interface IRootState {
  movies: IMoviesState;
  movieDetails: IMovieDetailsState;
  application: IApplicationState;
}
