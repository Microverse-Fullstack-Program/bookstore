import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/books';

const AddBookForm = () => {
  const [userInput, setUserInput] = useState({
    id: '',
    title: '',
    author: '',
    genre: '',
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setUserInput({
      ...userInput,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddBook(userInput));
    setUserInput({
      title: '',
      author: '',
    });
  };

  return (
    <div className="form-wrapper">
      <h1>ADD NEW BOOK</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          className="book-input"
          type="text"
          name="title"
          value={userInput.title}
          placeholder="Book Title"
          required
          onChange={handleInput}
        />
        <input
          className="author-input"
          type="text"
          name="author"
          value={userInput.author}
          placeholder="Book Author"
          required
          onChange={handleInput}
        />
        <button type="submit" className="addBtn">
          {' '}
          Add Book
          {' '}
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
