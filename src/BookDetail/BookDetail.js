import React from "react";

const BookDescription = ({ book }) => {
  const description = book.description ? book.description : book.name;
  if (!description || description.length < 300) {
    return <p className="book-description">{description}</p>;
  }
  return (
    <>
      <p className="book-description">{description.slice(0, 300)} ....</p>
      <a className="show-more" href="/">Show more</a>
    </>
  );
};

const BookDetail = ({ book }) => {
  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
      <BookDescription book={book} />
    </div>
  );
};

export default BookDetail;
