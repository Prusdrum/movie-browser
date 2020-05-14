import { useParams } from "react-router-dom";

export const useMovieRouteParams = () => useParams<{ id: string}>();

export const definition = {
  home: '/',
  search: '/search',
  movie: '/movie/:id'
};

export const path = {
  goToHomePage: () => '/',
  goToSearchPage: () => '/search',
  goToMovie: (id: string) => `/movie/${id}`,
};
