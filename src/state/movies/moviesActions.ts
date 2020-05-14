import { IMovie } from "../../common/types/state/IMovie";
import { createAction } from "redux-actions";

export const ActionNames = {
  ADD_MOVIES: '[movies] ADD_MOVIES',
};

export type ActionTypes = IMovie[];

export const ADD_MOVIES = createAction<IMovie[]>(ActionNames.ADD_MOVIES);