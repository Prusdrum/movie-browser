import { createAction } from "redux-actions";

export const ActionNames = {
  LOAD_MOVIE_DETAILS: '[movieDetails] LOAD_MOVIE_DETAILS',
  MOVIE_LOADED_SUCCESS: '[movieDetails] MOVIE_LOADED_SUCCESS',
  MOVIE_LOADED_ERROR: '[movieDetails] MOVIE_LOADED_ERROR',
};

export type ActionTypes = LOAD_MOVIE_DETAILS_ACTION | string;

export interface LOAD_MOVIE_DETAILS_ACTION {
  movieId: string;
}

export const LOAD_MOVIE_DETAILS = createAction<LOAD_MOVIE_DETAILS_ACTION>(ActionNames.LOAD_MOVIE_DETAILS);
export const MOVIE_LOADED_SUCCESS = createAction(ActionNames.MOVIE_LOADED_SUCCESS);
export const MOVIE_LOADED_ERROR = createAction<string>(ActionNames.MOVIE_LOADED_ERROR);