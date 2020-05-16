import React from 'react';
import MoviePageData from './MoviePageData';
import MoviePageDisplay from './MoviePageDisplay';
import SearchInput from '../shared/components/SearchInput/SearchInput';
import ViewHistory from '../shared/components/ViewHistory/ViewHistory';
import { makeStyles, Divider } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  inputContainer: {
    [theme.breakpoints.up('sm')] : {
      width: '50%',
    },
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    margin: '0 auto',
    marginBottom: theme.spacing(3),
  },
}))

const MoviePage = () => {
  const style = useStyle();

  return (
    <MoviePageData>
      {({ isLoaded, movie, error }) => (
        <div>
          <div className={style.inputContainer}>
            <SearchInput />
          </div>
          <MoviePageDisplay 
            movie={movie}
            isLoaded={isLoaded}
            error={error}/>
          <Divider />
          <ViewHistory />
        </div>
      )}
    </MoviePageData>
  );
}

export default MoviePage;