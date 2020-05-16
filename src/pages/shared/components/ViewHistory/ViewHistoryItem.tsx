import React from 'react';
import { IMovie } from '../../../../common/types/state/IMovie';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { path } from '../../../../common/routing/routes';
import ViewHistoryPoster from './ViewHistoryPoster';
import { getMovieTitle } from '../../../../common/service/format';

interface Props {
  movie: IMovie;
}

const useStyle = makeStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    height: '230px',
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
  }
}));

const ViewHistoryItem = ({ movie }: Props) => {
  const style = useStyle();
  return (
    <div className={style.item}>
      <ViewHistoryPoster movie={movie}/>
      <div className={style.title}>
        <Link to={path.goToMovie(movie.id)} style={{ textDecoration: 'none', color: 'black' }}>
          <Typography component="h3" variant="h6">
            {getMovieTitle(movie)}
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default ViewHistoryItem;