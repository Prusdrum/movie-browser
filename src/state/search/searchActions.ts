import { createAction } from "redux-actions"
import { IMovieSearchResult } from "../../common/types/state/IMovieSearchResult";

export const ActionNames = {
  UPDATE_QUERY: '[search] UPDATE_QUERY',
  START_LOADING: '[search] START_LOADING',
  RESULTS_LOADED: '[search] RESULTS_LOADED',
  RESULTS_ERROR: '[search] RESULTS_ERROR',
}

export type ActionTypes = string | IMovieSearchResult[];

export const UPDATE_QUERY = createAction<string>(ActionNames.UPDATE_QUERY);
export const START_LOADING = createAction(ActionNames.START_LOADING);
export const RESULTS_ERROR = createAction<string>(ActionNames.RESULTS_ERROR);
export const RESULTS_LOADED = createAction<IMovieSearchResult[]>(ActionNames.RESULTS_LOADED);