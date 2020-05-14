import { IMoviesState } from './moviesState';
import { handleActions } from 'redux-actions';
import { ActionNames, ActionTypes } from './moviesActions';
import { IMovie } from '../../common/types/state/IMovie';

const initialState: IMoviesState = {

};

const reducer = handleActions<IMoviesState, ActionTypes>({
  [ActionNames.ADD_MOVIES]: (state, action) => {
    const movies = action.payload as IMovie[];
    return movies.reduce<IMoviesState>((movies, movie) => {
      return {
        ...movies,
        [movie.id]: movie,
      }
    }, state);
  }
}, initialState);

export default reducer;