import React from 'react';
import { IMovie } from '../../../common/types/state/IMovie';

interface Props {
  movie: IMovie;
}

const MoviePlot = ({ movie }: Props) => {
  return (
    <p>
      {movie.plot}
    </p>
  );
}

export default MoviePlot;