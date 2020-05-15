export interface IApiSearchResponse {
  Search: IApiSearchMovie[];
  totalResults: string; // represents number
  Response: "True";
}

export interface IApiSearchMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string; // or N/A if missing
}