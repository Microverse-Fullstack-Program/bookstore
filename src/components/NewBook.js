import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/books';

const AddBookForm = () => {
  const [userInput, setUserInput] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
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
      category: '',
    });
  };

  return (
    <div className="form-wrapper">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          className="title-input"
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
        <select
          className="genre-input"
          type="text"
          name="category"
          value={userInput.genre}
          placeholder="Book Genre"
          onChange={handleInput}
        >
          <option value="Unknown"> Genre of Book</option>
          <option value="Fiction">Fiction</option>
          <option value="Non Fiction">Non Fiction</option>
          <option value="Narrative">Narrative</option>
          <option value="Short Story">Short Story</option>
          <option value="Non Fiction">Novel</option>
          <option value="Narrative">Poetry</option>
          <option value="Short Story">Mystery</option>
          <option value="Drama">Drama</option>
          <option value="History">History</option>
          <option value="Legend">Legend</option>
        </select>

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
