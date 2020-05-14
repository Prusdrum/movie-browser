import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMovie } from '../../common/types/state/IMovie';
import { useMovieRouteParams } from '../../common/routing/routes';
import { IRootState } from '../../state/IRootState';
import { LOAD_MOVIE_DETAILS, MOVIE_LOADED_SUCCESS } from '../../state/movieDetails/movieDetailsAction';
import { IMovieDetailsState } from '../../state/movieDetails/movieDetailsState';

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
  const { isLoaded, error } = useSelector<IRootState, IMovieDetailsState>(state => state.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie) {
      dispatch(LOAD_MOVIE_DETAILS({ movieId: id }));
    } else {
      dispatch(MOVIE_LOADED_SUCCESS());
    }
  }, [movie, id, dispatch]);

  return (
    <div>
      {children({ isLoaded, movie, error })}
    </div>
  )
};

export default MoviePageData;