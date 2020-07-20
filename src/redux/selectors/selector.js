import {createSelector} from 'reselect';

const bookListSelector = createSelector([
  state => state.books,
  state => state.loading,
  state => state.error,
], (books, loading, error) => ({books, loading, error}));

export const bookDetailSelector = createSelector([
  state => state.book,
  state => state.loading,
  state => state.error,
], (book, loading, error) => ({book, loading, error}));

export default bookListSelector;