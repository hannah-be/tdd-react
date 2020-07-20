import React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

const BookDescription = ({ book }) => {
  const description = book.description ? book.description : book.name + "...";
  if (!description || description.length < 300) {
    return <p className='book-description'>{description}</p>;
  }
  return (
    <>
      <p className='book-description'>{description.slice(0, 300)} ....</p>
      <a className='show-more' href='/'>
        Show more
      </a>
    </>
  );
};

const BookDetail = ({ book, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
    {book && (
      <div className='detail'>
      <h2 className='book-title'>{book.name}</h2>
      {book && <BookDescription book={book} />}
      <form noValidate autoComplete='off'>
        <TextField
          label='Name'
          name='name'
          margin='normal'
          variant='outlined'
        />

        <TextField
          name='content'
          label='Content'
          margin='normal'
          variant='outlined'
          multiline
          rowsMax='4'
        />

        <Button variant='contained' color='primary' name='submit'>
          Submit
        </Button>
      </form>
    </div>
  )}
  
  </>);
};

export default BookDetail;
