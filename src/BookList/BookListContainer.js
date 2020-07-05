import React, { useState, useEffect } from "react";

import { useRemoteService } from "../hooks";
import BookList from "./BookList";
import SearchBox from './SearchBox';

const BookListContainer = () => {
  const [term, setTerm] = useState('');
  const { data, loading, error, setUrl } = useRemoteService(
    "http://localhost:8080/books",
    []
  );

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`)
  }, [term, setUrl]);

  const onSearch = (event) => setTerm(event.target.value);

  return (
    <>
      <SearchBox term={term} onSearch={onSearch}/>
      <BookList books={data} loading={loading} error={error} />
    </>
  );
};

export default BookListContainer;
