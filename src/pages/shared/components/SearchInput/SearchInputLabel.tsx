import React from 'react';
import { IMovieSearchResult } from '../../../../common/types/state/IMovieSearchResult';
import { Link } from 'react-router-dom';
import { path } from '../../../../common/routing/routes';
import { makeStyles, Avatar } from '@material-ui/core';

interface Props {
  movie: IMovieSearchResult;
}

const useStyle = makeStyles((theme) => ({
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  title: {
    marginLeft: theme.spacing(1),
    display: 'inline-block',
  }
}));

const SearchInputLabel = ({  movie }: Props) => {
  const style = useStyle();

  return (
    <Link to={path.goToMovie(movie.id)} 
      className={style.item} 
      style={{ textDecoration: 'none' }}>
      <Avatar variant="square" src={movie.poster}/>
      <div className={style.title}>
        {movie.title} ({movie.year})
      </div>
    </Link>
  );
}

export default SearchInputLabel;