import { compose, applyMiddleware, createStore as _createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../state/rootReducer';
import rootSaga from '../effects/rootSaga';
import { IRootState } from '../state/IRootState';

export const createStore = (initialState: Partial<IRootState> = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    thunk,
    sagaMiddleware,
  ];

  const reducer = rootReducer;
  const createStoreWithMiddleware = compose(applyMiddleware(...middlewares))(_createStore);
  
  const store = createStoreWithMiddleware(reducer, initialState);
  sagaMiddleware.run(rootSaga);
  return store;
}
