import { all } from 'redux-saga/effects';
import { watchLoadMovieDetails } from './loadMovieDetailsSaga';

export default function* () {
  yield all([
    watchLoadMovieDetails(),
  ]);
}