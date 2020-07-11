import reducer from "./reducer";
import * as types from "../types";

describe("Reducer", () => {
  it('Add the search term to state', () => {
    const term = 'domain';
    const action = { type: types.SET_SEARCH_TERM, payload: { term } };
  
    const state = reducer([], action);

    expect(state.term).toBe(term)
  })

  it("Show loading when request is sent", () => {
    const initState = { loading: false };

    const action = { type: types.FETCH_BOOKS_PENDING };
    const state = reducer(initState, action);

    expect(state.loading).toBeTruthy();
  });

  it("Add payload to state when request returns response", () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
    ];

    const action = {
      type: types.FETCH_BOOKS_SUCCESS,
      payload: books
    };

    const state = reducer([], action);
    expect(state.books).toBe(books);
  });
});
