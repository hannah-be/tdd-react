import axios from "axios";

import * as types from './types'

export const setSearchTerm = (term) => {
  return { type: types.SET_SEARCH_TERM, term };
};

export const fetchBooks = (term) => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_BOOKS_PENDING });
    return axios.get(`http://localhost:8080/books?q=${term || ''}`).then((res) => {
      dispatch({ type: types.FETCH_BOOKS_SUCCESS, payload: res.data });
    }).catch((err) => {
        dispatch({type: types.FETCH_BOOKS_FAILED, err: err.message})
      });
  };
};
