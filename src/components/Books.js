import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import Book from './Book';
import AddBookForm from './NewBook';
import { FetchBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const shouldFetchBooks = useRef(true);
  useEffect(() => {
    if (shouldFetchBooks.current) {
      shouldFetchBooks.current = false;
      dispatch(FetchBook());
    }
  }, [dispatch]);

  let bookList = useSelector((state) => state.books).book;
  if (bookList === null || bookList === undefined) {
    bookList = [];
  }

  return (
    <div className="books-wrapper">
      {bookList.map((bk) => (
        <div key={bk.id}>
          <Book book={bk} />
        </div>
      ))}
      <AddBookForm />
    </div>
  );
};

export default Books;
