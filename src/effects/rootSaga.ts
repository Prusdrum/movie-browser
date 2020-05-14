import { all } from 'redux-saga/effects';
import { watchLoadMovieDetails } from './loadMovieDetailsSaga';
import { watchAppLoaded } from './loadMoviesFromStorageSaga';

export default function* () {
  yield all([
    watchLoadMovieDetails(),
    watchAppLoaded(),
  ]);
}