import { combineReducers } from 'redux';
import moviesReducer from './movies/moviesReducer';
import { IRootState } from './IRootState';

export default combineReducers<IRootState>({
  movies: moviesReducer
});