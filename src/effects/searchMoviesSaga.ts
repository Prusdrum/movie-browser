import { debounce, put, call } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ActionNames, START_LOADING, RESULTS_LOADED, RESULTS_ERROR } from '../state/search/searchActions';
import { searchMovie } from '../common/service/api/searchMovie';
import { searchResultFromApi } from '../common/service/mapper';
import { IApiSearchResponse } from '../common/types/api/IApiSearchResponse';

function* findMovies(action: Action<string>) {
  const query = action.payload;

  try {
    if (query.length >= 3) {
      yield put(START_LOADING());

      const response = (yield call(searchMovie, query)) as IApiSearchResponse;
      const results = response.Search.map(searchResultFromApi);
      yield put(RESULTS_LOADED(results));
    }
  } catch (err) {
    yield put(RESULTS_ERROR(err.message))
  }
}

export function* watchUpdateQuery() {
  yield debounce(
    300,
    ActionNames.UPDATE_QUERY,
    findMovies,
  );
}