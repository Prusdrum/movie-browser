export interface IApiSearchResponse {
  Search: IApiMovie[];
  totalResults: string; // represents number
  Response: string;
}

export interface IApiMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string; // or N/A if missing
}