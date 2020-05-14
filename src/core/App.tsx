import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from './createStore';
import AppRouter from './AppRouter';
import isDev from '../common/types/api/utils/isDev';

const App = () => {
  const store = createStore();

  if (isDev()) {
    (window as { [key: string]: any })['getState'] = () => store.getState();
  }
  
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
