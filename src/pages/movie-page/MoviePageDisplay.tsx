import React from 'react';
import { IMovie } from '../../common/types/state/IMovie';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import ErrorNotification from '../../common/components/ErrorNotification/ErrorNotification';
import MoviePoster from './components/MoviePoster';
import MovieInfo from './components/MovieInfo';
import MovieRating from './components/MovieRating';
import MoviePlot from './components/MoviePlot';

interface Props {
  movie: IMovie | null;
  isLoaded: boolean;
  error: string;
}

const MoviePageDisplay = ({ movie, error, isLoaded }: Props) => {
  if (!isLoaded || movie === null) {
    return (
      <CircularProgress />
    );
  }

  if (error.length) {
    return (
      <ErrorNotification>{error}</ErrorNotification>
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h3" component="h2">{movie.title} ({movie.year})</Typography>
        <MoviePoster movie={movie}/>
      </Grid>
      <Grid item xs={12} sm={8}>
        <MovieInfo title={"Genre"} value={movie.genre}/>
        <MovieInfo title={"Language"} value={movie.language}/>
        <MovieInfo title={"Released"} value={movie.released}/>
        <MovieInfo title={"Rating"} value={<MovieRating movie={movie}/>}/>
        <MovieInfo title={"Plot"} value={<MoviePlot movie={movie}/>}/>
        <MovieInfo title={"Actors"} value={movie.actors}/>
        <MovieInfo title={"Writer"} value={movie.writer}/>
        <MovieInfo title={"Director"} value={movie.director}/>
      </Grid>
    </Grid>
  )
};

export default MoviePageDisplay;