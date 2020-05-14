import { get } from 'local-storage';
import { takeLatest, put } from 'redux-saga/effects';
import { ActionNames, APP_LOADED } from '../state/application/applicationActions';
import { ILocalStorage } from '../common/types/local-storage/ILocalStorage';
import { ADD_MOVIES } from '../state/movies/moviesActions';
import { LOCAL_STORAGE_KEY } from '../common/constants';

export function* _loadMoviesFromLocalStorage() {
  const storageData = get<ILocalStorage>(LOCAL_STORAGE_KEY);

  if (storageData !== null) {
    yield put(ADD_MOVIES(storageData.movies));
  }

  yield put(APP_LOADED());
}

export function* watchAppLoaded() {
  yield takeLatest(
    ActionNames.LOAD_APP,
    _loadMoviesFromLocalStorage, 
  );
}