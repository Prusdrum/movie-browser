import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { definition } from '../common/routing/routes';
import AppPage from './AppPage';
import MoviePage from '../pages/movie-page/MoviePage';
import SearchPage from '../pages/search-page/SearchPage';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_APP } from '../state/application/applicationActions';
import { IRootState } from '../state/IRootState';

export default () => {
  const dispatch = useDispatch();
  const isAppLoaded = useSelector<IRootState, boolean>(state => state.application.isLoaded);

  useEffect(() => {
    if (!isAppLoaded) {
      dispatch(LOAD_APP());
    }
  }, [dispatch, isAppLoaded]);

  if (!isAppLoaded) {
    return null;
  }

  return (
    <Router basename={"/movie-browser"}>
      <Switch>
        <Route exact path={definition.home}>
          <AppPage>
            <SearchPage />
          </AppPage>
        </Route>
        <Route exact path={definition.search}>
          <AppPage>
            <SearchPage />
          </AppPage>
        </Route>  
        <Route exact path={definition.movie}>
          <AppPage>
            <MoviePage />
          </AppPage>
        </Route>
      </Switch>
    </Router>
  );
}