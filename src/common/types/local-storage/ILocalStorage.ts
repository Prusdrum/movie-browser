import { IMovie } from "../state/IMovie";

export type ILocalStorage = {
  movies: IMovie[];
} | null;