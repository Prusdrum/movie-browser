import { IMovieDetailsState } from "./movieDetailsState";
import { handleActions } from "redux-actions";
import { ActionNames, ActionTypes, LOAD_MOVIE_DETAILS_ACTION } from "./movieDetailsAction";

const initialState: IMovieDetailsState = {
  currentId: '',
  error: '',
  isLoaded: false,
  isLoading: false,
};

const reducer = handleActions<IMovieDetailsState, ActionTypes>({
  [ActionNames.LOAD_MOVIE_DETAILS]: (state, action) => {
    const { movieId } = action.payload as LOAD_MOVIE_DETAILS_ACTION;
    return {
      ...state,
      error: '',
      isLoading: true,
      isLoaded: false,
      currentId: movieId,
    };
  },
  [ActionNames.MOVIE_LOADED_SUCCESS]: (state) => {
    return {
      ...state,
      error: '',
      isLoaded: true,
      isLoading: false,
    };
  },
  [ActionNames.MOVIE_LOADED_ERROR]: (state, action) => {
    const error = action.payload as string;
    return {
      ...state,
      isLoading: false,
      isLoaded: false,
      error,
    }
  }
}, initialState);

export default reducer;