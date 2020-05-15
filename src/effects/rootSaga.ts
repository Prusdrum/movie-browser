import { all } from 'redux-saga/effects';
import { watchLoadMovieDetails } from './loadMovieDetailsSaga';
import { watchAppLoaded } from './loadMoviesFromStorageSaga';
import { watchUpdateQuery } from './searchMoviesSaga';

export default function* () {
  yield all([
    watchLoadMovieDetails(),
    watchAppLoaded(),
    watchUpdateQuery(),
  ]);
}