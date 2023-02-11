import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './NewBook';

const Books = () => {
  const booksList = useSelector((state) => state.books);

  return (
    <div className="books-wrapper">
      {booksList.map((book) => (
        <div key={book.id} className="book">
          {' '}
          <Book book={book} />
        </div>
      ))}

      <AddBookForm />
    </div>
  );
};

export default Books;
