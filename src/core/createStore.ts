import thunk from 'redux-thunk';
import rootReducer from '../state/rootReducer';
import { combineReducers, compose, applyMiddleware, createStore as _createStore } from 'redux';

export const createStore = (initialState = {}) => {
  const middlewares = [
    thunk,
  ];

  const reducer = combineReducers({ ...rootReducer });
  const createStoreWithMiddleware = compose(applyMiddleware(...middlewares))(_createStore);
  
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}
