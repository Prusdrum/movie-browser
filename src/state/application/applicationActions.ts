import { createAction } from "redux-actions";

export const ActionNames = {
  LOAD_APP: '[application] LOAD_APP',
  APP_LOADED: '[application] APP_LOADED',
};

export const LOAD_APP = createAction(ActionNames.LOAD_APP);
export const APP_LOADED = createAction(ActionNames.APP_LOADED);