import reducer, { Creators as CategoriesActions } from '../categories';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

describe('Categories reducer', () => {
  it('should be able to fetch categories', () => {
    const state = reducer(
      INITIAL_STATE,
      CategoriesActions.retrieveCategoriesSuccess([
        'react',
        'redux',
        'udacity',
      ]),
    );

    expect(state.data).toHaveLength(3);
  });

  it('should be able to handle error response when fetching categories', () => {
    const error = 'failed';
    const state = reducer(
      INITIAL_STATE,
      CategoriesActions.retrieveCategoriesError(error),
    );

    expect(state.error).toEqual(error);
  });
});
