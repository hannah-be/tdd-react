import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions/actions";
import { bookDetailSelector } from "../../redux/selectors/selector";

import BookDetail from "./BookDetail";


const BookDetailContainer = ({match}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchABook(match.params.id))
  }, [match, dispatch]);

  const { book, loading } = useSelector(bookDetailSelector);

  return (
    <BookDetail book={book} loading={loading}/>
  );
};

export default BookDetailContainer;
