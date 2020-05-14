import { IMovie } from  '../../common/types/state/IMovie';

export type IMoviesState = {
  [id: string]: IMovie;
};