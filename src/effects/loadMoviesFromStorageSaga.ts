import { get } from 'local-storage';
import { takeLatest, put } from 'redux-saga/effects';
import { ActionNames } from '../state/application/applicationActions';
import { ILocalStorage } from '../common/types/local-storage/ILocalStorage';
import { ADD_MOVIES } from '../state/movies/moviesActions';

const STORAGE_KEY = 'REACT_APP_MOVIES';

export function* _loadMoviesFromLocalStorage() {
  const storageData = get<ILocalStorage>(STORAGE_KEY);

  if (storageData !== null) {
    yield put(ADD_MOVIES(storageData.movies));
  }
}

export function* watchAppLoaded() {
  yield takeLatest(
    ActionNames.LOAD_APP,
    _loadMoviesFromLocalStorage, 
  );
}