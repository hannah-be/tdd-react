import { setSearchTerm } from "./actions";


describe("BookListContainer related actions", () => {
  it("Set search keyword", () => {
    const term = "";
    const expected = {
      type: "SET_SEARCH_TERM",
      term,
    };
    const action = setSearchTerm(term);
    expect(action).toEqual(expected);
  });
});
