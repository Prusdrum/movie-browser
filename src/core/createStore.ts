import thunk from 'redux-thunk';
import rootReducer from '../state/rootReducer';
import { compose, applyMiddleware, createStore as _createStore } from 'redux';
import { IRootState } from '../state/IRootState';

export const createStore = (initialState: Partial<IRootState> = {}) => {
  const middlewares = [
    thunk,
  ];

  const reducer = rootReducer;
  const createStoreWithMiddleware = compose(applyMiddleware(...middlewares))(_createStore);
  
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}
