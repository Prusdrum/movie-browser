import { _loadMoviesFromLocalStorage } from '../loadMoviesFromStorageSaga';
import { runSaga } from 'redux-saga';
import { get } from 'local-storage';
import { ILocalStorage } from '../../common/types/local-storage/ILocalStorage';
import { IMovie } from '../../common/types/state/IMovie';

jest.mock('local-storage', () => ({
  get: jest.fn(),
}));

const makeMovie = (props: Partial<IMovie>): IMovie => {
  return {
    id: '',
    genre: '',
    language: '',
    plot: '',
    poster: '',
    rating: 0,
    votes: '',
    title: '',
    year: '',
    actors: '',
    director: '',
    released: '',
    runtime: '',
    writer: '',
    ...props,
  }
}


describe('load movies from storage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('when there is no movie in storage', () => {
    beforeEach(() => {
      (get as jest.Mock).mockImplementationOnce(() => null);
    });

    it('should only call app loaded action', () => {
      const dispatched: any[] = [];
      const saga = runSaga({
        dispatch: (action: any) => dispatched.push(action),
        getState: () => {},
      }, _loadMoviesFromLocalStorage);

      expect(dispatched.length).toEqual(1);
    });
  });

  describe('when there is a movie in storage', () => {
    beforeEach(() => {
      (get as jest.Mock).mockImplementationOnce(() => ({
        movies: [
          makeMovie({
            id: '123',
            title: 'My movie title'
          })
        ]
      } as ILocalStorage))
    });
    it('should parse it and dispatch an action to add it to the store', async () => {
      const dispatched: any[] = [];
      const saga = runSaga({
        dispatch: (action: any) => dispatched.push(action),
        getState: () => {},
      }, _loadMoviesFromLocalStorage);

      expect(dispatched.length).toEqual(2);
      expect(dispatched[0].payload).toEqual([
        makeMovie({
          id: '123',
          title: 'My movie title'
        })
      ])
    });
  });
});