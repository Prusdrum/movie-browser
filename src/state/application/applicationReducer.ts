import { handleActions } from "redux-actions";
import { IApplicationState } from "./applicationState";
import { ActionNames } from './applicationActions';

const initialState: IApplicationState = {
  isLoaded: false,
}

const reducer = handleActions<IApplicationState>({
  [ActionNames.APP_LOADED]: (state) => {
    return {
      ...state,
      isLoaded: true,
    }
  }
}, initialState);

export default reducer;