export const Types = {
  RETRIEVE_CATEGORIES_REQUEST: 'categories/RETRIEVE_CATEGORIES_REQUEST',
  RETRIEVE_CATEGORIES_SUCCESS: 'categories/RETRIEVE_CATEGORIES_SUCCESS',
  RETRIEVE_CATEGORIES_ERROR: 'categories/RETRIEVE_CATEGORIES_ERROR',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.RETRIEVE_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case Types.RETRIEVE_CATEGORIES_SUCCESS:
      return { data: action.payload.data, loading: false };
    case Types.RETRIEVE_CATEGORIES_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  retrieveCategoriesRequest: () => ({
    type: Types.RETRIEVE_CATEGORIES_REQUEST,
  }),
  retrieveCategoriesSuccess: data => ({
    type: Types.RETRIEVE_CATEGORIES_SUCCESS,
    payload: { data },
  }),
  retrieveCategoriesError: error => ({
    type: Types.RETRIEVE_CATEGORIES_ERROR,
    payload: { error },
  }),
};
