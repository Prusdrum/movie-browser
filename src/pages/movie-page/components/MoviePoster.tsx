import React from 'react';
import { makeStyles } from '@material-ui/core';
import { IMovie } from '../../../common/types/state/IMovie';

interface Props {
  movie: IMovie;
}

const useStyle = makeStyles((theme) => ({
  container: {

  },
  image: {
    width: '100%'
  }
}))

const MoviePoster = ({ movie }: Props) => {
  const style = useStyle();

  if (!movie.poster.length) {
    return null;
  }

  return (
    <div className={style.container}>
      <img className={style.image} src={movie.poster} alt={`Movie poster for movie: "${movie.title}"`}/>
    </div>
  )
};

export default MoviePoster;