import React from 'react';
import MoviePageData from './MoviePageData';
import { CircularProgress } from '@material-ui/core';

const MoviePage = () => {
  return (
    <MoviePageData>
      {({ isLoaded, movie, error }) => (
        isLoaded ? <div>Movie</div> : error ? <div>{error}</div> : <CircularProgress />
      )}
    </MoviePageData>
  );
}

export default MoviePage;