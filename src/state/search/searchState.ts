import { IMovieSearchResult } from "../../common/types/state/IMovieSearchResult";

export type ISearchState = {
  query: string;
  isLoading: boolean;
  results: IMovieSearchResult[];
  error: string;
}