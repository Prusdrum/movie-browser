import { createAction } from "redux-actions";

export const ActionNames = {
  LOAD_APP: '[application] LOAD_APP',
};

export const LOAD_APP = createAction(ActionNames.LOAD_APP);