import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { definition, path } from '../common/routing/routes';
import AppPage from './AppPage';
import MoviePage from '../pages/movie-page/MoviePage';
import SearchPage from '../pages/search-page/SearchPage';

export default () => {
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