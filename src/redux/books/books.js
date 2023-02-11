import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const ApiKey = 'vGqwwjT4O4Gm9D3HZMDv';
const APIURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ApiKey}/books`;

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'book-store/books/FETCH_BOOKS';

// Action creators
const FetchBook = createAsyncThunk(FETCH_BOOKS, async () => {
  const booksResult = await fetch(APIURL);
  const bookData = await booksResult.json();
  const Book = [];
  Object.keys(bookData).forEach((key) => {
    Book.push({
      id: key,
      title: bookData[key][0].title,
      author: bookData[key][0].author,
      category: bookData[key][0].category,
    });
  });
  return Book;
});

const AddBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(APIURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  return book;
});

const RemoveBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${APIURL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return id;
});

// Reducer
const ReducerBooks = createSlice({
  name: 'bookstore/book/',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchBook.fulfilled, (state, action) => (
        {
          ...state,
          book: [...action.payload],
        }))
      .addCase(AddBook.fulfilled, (state, action) => {
        state.book.push(action.payload);
      })
      .addCase(RemoveBook.fulfilled, (state, action) => (
        {
          ...state,
          book:
          state.book.filter((book) => book.id !== action.payload),
        }
      ));
  },
});

export { FetchBook, AddBook, RemoveBook };
export default ReducerBooks;
