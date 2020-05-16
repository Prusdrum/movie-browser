import React from 'react';
import { IRootState } from '../../../../state/IRootState';
import { useSelector } from 'react-redux';
import { IMovie } from '../../../../common/types/state/IMovie';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import ViewHistoryItem from './ViewHistoryItem';

const useStyle = makeStyles((theme) => ({
  container: {
    margin: '0 auto',
    marginTop: theme.spacing(3),
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))

const getLoadedMovies = (state: IRootState) => 
  Object.entries(state.movies).map(([id, movie]) => ({...movie})).slice(0, 1000); 

const ViewHistory = () => {
  const movies = useSelector<IRootState, IMovie[]>(getLoadedMovies);
  const style = useStyle();

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className={style.container}>
      <Typography variant="h5" component="h2" className={style.title}>You've already viewed</Typography>
      <Grid container spacing={1}>
        {movies.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
            <ViewHistoryItem movie={movie}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ViewHistory;