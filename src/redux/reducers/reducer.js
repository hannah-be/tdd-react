import * as types from "../types";

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_PENDING:
      return { ...state, loading: true };
    case types.FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.payload, loading: false };
    case types.FETCH_BOOKS_FAILED:
      return { ...state, loading: false, error: true };
    case types.SET_SEARCH_TERM:
      return { ...state, term: action.payload.term }
    default:
      return state;
  }
};

export default reducer;