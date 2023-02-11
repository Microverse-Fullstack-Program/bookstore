import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

// Initial state
const initStateBooks = [
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
    genere: 'Fiction',
  },
  {
    id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    genere: 'Fiction',
  },
  {
    id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    genere: 'Nonfiction',
  },
];

// Reducer
const ReducerBooks = (state = initStateBooks, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

// Action creators
const AddBook = (book) => (
  {
    type: ADD,
    payload: {
      id: uuidv4(),
      title: book.title,
      author: book.author,
    },
  });

const RemoveBook = (id) => (
  {
    type: REMOVE,
    payload: { id },
  }
);

export { AddBook, RemoveBook };
export default ReducerBooks;
