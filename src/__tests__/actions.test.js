import { updateMovies } from '../redux/movies';


//Unit test case to check the reducer action functionlaity of redux
describe('Redux Actions', () => {
  it('should create an action to update movies', () => {
    const movies = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
    ];

    const expectedAction = {
      type: 'UPDATE_MOVIES',
      payload: movies,
    };

    expect(updateMovies(movies)).toEqual(expectedAction);
  });
});
