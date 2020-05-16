import React from 'react';
import { makeStyles } from '@material-ui/core';
import { IMovie } from '../../../../common/types/state/IMovie';

const useStyle = makeStyles((theme) => ({
  posterContainer: {
    margin: '0 auto',
  },
  poster: {
    width: 'auto',
    height: '150px'
  },
  fallback: {
    backgroundColor: theme.palette.grey[100],
    display: 'inline-block',
    height: '150px',
    width: '100px'
  }
}));

interface Props {
  movie: IMovie;
}

const ViewHistoryPoster = ({ movie }: Props) => {
  const style = useStyle();

  return (
    <div className={style.posterContainer}>
      {movie.poster.length ? 
        <img
          alt={`Poster for movie: ${movie.title}`} 
          className={style.poster} 
          src={movie.poster}/>
        : <div className={style.fallback}></div>}
    </div>
  );
}

export default ViewHistoryPoster;