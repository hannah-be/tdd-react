import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions/actions";
import bookListSelector from "../../redux/selectors/selector";

import BookList from "./BookList";
import SearchBox from "./SearchBox";

const BookListContainer = () => {
  const [term, setTerm] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchBooks());
  }, [dispatch]);

  const { books, loading, error } = useSelector(bookListSelector);
  const onSearch = (event) => {
    dispatch(actions.setSearchTerm(event.target.value));
    dispatch(actions.fetchBooks());
  };

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={books} loading={loading} error={error} />
    </>
  );
};

export default BookListContainer;
