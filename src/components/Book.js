import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;

  return (
    <div className="book">
      <div className="book-details">
        <p>
          {' '}
          {title}
          {' '}
        </p>
        <p>
          {' '}
          {author}
        </p>
      </div>
      <button type="submit">Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
