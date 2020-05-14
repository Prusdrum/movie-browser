import { IMoviesState } from "./movies/moviesState";
import { IMovieDetailsState } from "./movieDetails/movieDetailsState";

export interface IRootState {
  movies: IMoviesState;
  movieDetails: IMovieDetailsState;
}
