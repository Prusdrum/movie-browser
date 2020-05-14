import { IMoviesState } from './moviesState';
import { handleActions } from 'redux-actions';

const initialState: IMoviesState = {

};

const reducer = handleActions<IMoviesState>({

}, initialState);

export default reducer;