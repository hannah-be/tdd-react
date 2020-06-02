import React from 'react';
import Typography from '@material-ui/core/Typography';

const renderBooks = (books) => {
  return <div data-test="book-list">
    {
      books.map(book => (<div className="book-item">
        <h2 className="title">{book.name}</h2>
      </div>))
    }
  </div>;
}

function App() {
  const books = [{ name: 'Refactoring' }, { name: 'Domain-driven design' }];
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      {renderBooks(books)}
    </div>
  );
}

export default App;
