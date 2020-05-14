import React from 'react';
import MoviePageData from './MoviePageData';
import { CircularProgress } from '@material-ui/core';

const MoviePage = () => {
  return (
    <MoviePageData>
      {({ isLoaded, movie }) => (
        isLoaded ? <div>Movie</div> : <CircularProgress />
      )}
    </MoviePageData>
  );
}

export default MoviePage;