import React, { useState } from 'react';
import Book from './Book';
import NewBook from './AddBook';

const Books = () => {
  const [book] = useState({
    title: 'Book 1',
    author: 'Author 1',
  });

  return (
    <div className="books-wrapper">
      <div className="book-list">
        <p>List of Books</p>
        <Book book={book} />
      </div>
      <NewBook />
    </div>
  );
};

export default Books;
