import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { definition, path } from '../common/routing/routes';
import AppPage from './AppPage';
import MoviePage from '../pages/movie-page/MoviePage';
import SearchPage from '../pages/search-page/SearchPage';
import { useDispatch } from 'react-redux';
import { LOAD_APP } from '../state/application/applicationActions';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOAD_APP());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path={definition.home}>
          <Redirect to={path.goToSearchPage()}/>
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