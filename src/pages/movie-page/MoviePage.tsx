import React from 'react';
import MoviePageData from './MoviePageData';
import MoviePageDisplay from './MoviePageDisplay';

const MoviePage = () => {
  return (
    <MoviePageData>
      {({ isLoaded, movie, error }) => (
        <MoviePageDisplay 
          movie={movie}
          isLoaded={isLoaded}
          error={error}/>
      )}
    </MoviePageData>
  );
}

export default MoviePage;