import React from 'react';
import { IMovie } from '../../common/types/state/IMovie';
import { useMovieRouteParams } from '../../common/routing/routes';
import { useSelector } from 'react-redux';
import { IRootState } from '../../state/IRootState';

interface ChildrenProps {
  isLoaded: boolean;
  movie: null | IMovie;
  error?: string;
}

interface Props {
  children: (props: ChildrenProps) => React.ReactNode;
}

const MoviePageData = ({ children }: Props) => {
  const { id } = useMovieRouteParams();
  const movie = useSelector<IRootState, IMovie>(state => state.movies[id]);

  return (
    <div>
      {children({ isLoaded: false, movie })}
    </div>
  )
};

export default MoviePageData;