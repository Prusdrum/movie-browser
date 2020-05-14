import { Action } from 'redux-actions';
import { set } from 'local-storage';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import {
  ActionNames, LOAD_MOVIE_DETAILS_ACTION,
  MOVIE_LOADED_ERROR,
  MOVIE_LOADED_SUCCESS,
} from '../state/movieDetails/movieDetailsAction';
import { getMovie } from '../common/service/api/getMovie';
import { movieFromApi } from '../common/service/mapper';
import { ADD_MOVIES } from '../state/movies/moviesActions';
import { IRootState } from '../state/IRootState';
import { LOCAL_STORAGE_KEY } from '../common/constants';
import { ILocalStorage } from '../common/types/local-storage/ILocalStorage';

export function* _loadMovieDetails(action: Action<LOAD_MOVIE_DETAILS_ACTION>) {
  try {
    const response = yield call(getMovie, action.payload.movieId);
    const movie = movieFromApi(response);

    yield put(ADD_MOVIES([movie]));
    const state: IRootState = yield select();

    set<ILocalStorage>(LOCAL_STORAGE_KEY, {
      movies: Object.entries(state.movies).map(([id, movie]) => ({ ...movie }))
    });
    
    yield put(MOVIE_LOADED_SUCCESS());
  } catch (err) {
    yield put(MOVIE_LOADED_ERROR(err.message));
  }
}

export function* watchLoadMovieDetails() {
  yield takeLatest(
    ActionNames.LOAD_MOVIE_DETAILS,
    _loadMovieDetails,
  );
}