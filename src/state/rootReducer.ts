import { combineReducers } from 'redux';
import { IRootState } from './IRootState';
import moviesReducer from './movies/moviesReducer';
import movieDetailsReducer from './movieDetails/movieDetailsReducer';
import applicationReducer from './application/applicationReducer';

export default combineReducers<IRootState>({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  application: applicationReducer,
});