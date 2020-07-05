import React from "react";

import BookDetail from "./BookDetail";
import { useRemoteService } from "../../hooks";

const BookDetailContainer = ({ match }) => {
  const { data } = useRemoteService(
    `http://localhost:8080/books/${match.params.id}`,
    {}
  );

  return <BookDetail book={data} />;
};

// const BookDetailContainer = ({match}) => {
//   // fetchBookById(match.params.id) 
//   // that will fetch data with `match.params.id`
//   return (<BookDetail book={book}/>);
// };

export default BookDetailContainer;
