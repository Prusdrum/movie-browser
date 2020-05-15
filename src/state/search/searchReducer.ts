import { ISearchState } from "./searchState";
import { handleActions } from "redux-actions";
import { ActionNames, ActionTypes } from './searchActions';
import { IMovieSearchResult } from "../../common/types/state/IMovieSearchResult";

const initialState: ISearchState = {
  isLoading: false,
  query: '',
  results: [],
  error: '',
};

const reducer = handleActions<ISearchState, ActionTypes>({
  [ActionNames.START_LOADING]: (state) => {
    return {
      ...state,
      isLoading: true,
    }
  },
  [ActionNames.UPDATE_QUERY]: (state, action) => {
    return {
      ...state,
      query: action.payload as string,
    }
  },
  [ActionNames.RESULTS_LOADED]: (state, action) => {
    return {
      ...state,
      results: action.payload as IMovieSearchResult[],
      isLoading: false,
    }
  },
  [ActionNames.RESULTS_ERROR]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.payload as string,
    }
  }
}, initialState);

export default reducer;