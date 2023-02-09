// Actions
const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

const initStateBooks = [];

// Reducer
const ReducerBooks = (state = initStateBooks, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

// Action creators
const AddBook = () => ({ type: ADD });
const RemoveBook = () => ({ type: REMOVE });

export { AddBook, RemoveBook };
export default ReducerBooks;
