import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CategoriesActions } from '../ducks/categories';

export function* retrieveCategories() {
  try {
    const response = yield call(api.get, '/categories');
    console.log(response);

    yield put(
      CategoriesActions.retrieveCategoriesSuccess(response.data.categories),
    );
  } catch (err) {
    yield put(
      CategoriesActions.retrieveCategoriesError(
        'An error has occurred. Please, refresh the page.',
      ),
    );
  }
}
