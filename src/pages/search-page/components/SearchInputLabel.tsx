import React from 'react';
import { IMovieSearchResult } from '../../../common/types/state/IMovieSearchResult';
import { Link } from 'react-router-dom';
import { path } from '../../../common/routing/routes';

interface Props {
  movie: IMovieSearchResult;
}

const SearchInputLabel = ({  movie }: Props) => {
  return (
    <Link to={path.goToMovie(movie.id)}>
      {movie.title} ({movie.year})
    </Link>
  );
}

export default SearchInputLabel;