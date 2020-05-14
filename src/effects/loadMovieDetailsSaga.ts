import { Action } from 'redux-actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  ActionNames, LOAD_MOVIE_DETAILS_ACTION,
  MOVIE_LOADED_ERROR,
} from '../state/movieDetails/movieDetailsAction';
import { getMovie } from '../common/api/getMovie';

function* loadMovieDetails(action: Action<LOAD_MOVIE_DETAILS_ACTION>) {
  try {
    const response = yield call(getMovie, action.payload.movieId);
    console.log(response)
  } catch (err) {
    yield put(MOVIE_LOADED_ERROR(err.message));
  }
}

export function* watchLoadMovieDetails() {
  yield takeLatest(
    ActionNames.LOAD_MOVIE_DETAILS,
    loadMovieDetails,
  );
}