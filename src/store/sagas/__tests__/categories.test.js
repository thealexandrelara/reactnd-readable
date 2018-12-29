import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import rootSaga from '../index';
import api from '../../../services/api';

import {
  Types as CategoriesTypes,
  Creators as CategoriesActions,
} from '../../ducks/categories';

const apiMock = new MockAdapter(api);

describe('Categories Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it('should fetch results from API', async () => {
    const categories = [{ path: 'react', name: 'react' }];
    const response = {
      categories,
    };

    apiMock.onGet('/categories').reply(200, response);

    sagaTester.dispatch(CategoriesActions.retrieveCategoriesRequest());

    await sagaTester.waitFor(CategoriesTypes.RETRIEVE_CATEGORIES_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CategoriesActions.retrieveCategoriesSuccess(categories),
    );
  });

  it('should handle error from API', async () => {
    const error = 'An error has occurred. Please, refresh the page.';
    const response = {
      error: 'An error has occurred. Please, refresh the page.',
    };

    apiMock.onGet('/categories').reply(400, response);

    sagaTester.dispatch(CategoriesActions.retrieveCategoriesRequest());

    await sagaTester.waitFor(CategoriesTypes.RETRIEVE_CATEGORIES_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      CategoriesActions.retrieveCategoriesError(error),
    );
  });
});
