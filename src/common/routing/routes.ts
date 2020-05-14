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
