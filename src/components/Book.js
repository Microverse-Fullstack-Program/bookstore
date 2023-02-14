import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(RemoveBook(book.id));
  };

  return (
    <div className="book-wrapper">
      <div className="book">
        <div className="book-detail">
          <p className="bk-genre">
            {' '}
            {book.category}
            {' '}
          </p>
          <h2 className="bk-title">
            {' '}
            {book.title}
            {' '}
          </h2>
          <p className="bk-author">
            {' '}
            {book.author}
            {' '}
          </p>
        </div>
        <div className="bookBtn">
          <button type="button"> Comments </button>
          <button type="button" onClick={handleRemoveBook}>
            Remove
          </button>
          <button type="button"> Edit </button>
        </div>
      </div>

      <div className="bk-status">
        <div className="pie-graph"> </div>
        <div className="completed-percentage">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="process">
        <div className="curr-chapter">
          <p className="completed">CURRENT CHAPTER</p>
          <p className="chapter">Chapter  17</p>
        </div>
        <button type="button">UPDATE PROCESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Book;
