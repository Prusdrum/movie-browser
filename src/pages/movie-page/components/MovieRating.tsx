import React from 'react';
import { IMovie } from '../../../common/types/state/IMovie';
import Rating from '@material-ui/lab/Rating';
import { Typography } from '@material-ui/core';

interface Props {
  movie: IMovie;
}

const MovieRating = ({ movie }: Props) => {
  return (
    <div>
      <Rating readOnly value={movie.rating} max={10}/>
      <Typography component="legend">{movie.rating}/10 | {movie.votes} votes</Typography>
    </div>
  );
}

export default MovieRating;