import { combineReducers } from 'redux';
import { IRootState } from './IRootState';
import moviesReducer from './movies/moviesReducer';
import movieDetailsReducer from './movieDetails/movieDetailsReducer';

export default combineReducers<IRootState>({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
});