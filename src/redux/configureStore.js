import { configureStore } from '@reduxjs/toolkit';
import ReducerBooks from './books/books';
import ReducerCategories from './categories/categories';

const store = configureStore({
  reducer: {
    books: ReducerBooks.reducer,
    categories: ReducerCategories,
  },
});

export default store;
