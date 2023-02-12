import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(RemoveBook(book.id));
  };

  return (
    <div className="book-details">
      <p className="bk-title">
        {' '}
        {book.title}
        {' '}
      </p>
      <p className="bk-author">
        {' '}
        {book.author}
        {' '}
      </p>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Book;
