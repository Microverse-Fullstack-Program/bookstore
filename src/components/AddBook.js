const NewBook = () => (
  <div className="form-wrapper">
    <h2>Add a new book</h2>
    <form className="book-form">
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="author" placeholder="Author" required />
      <span />
      <button type="submit"> Add </button>
    </form>
  </div>
);

export default NewBook;
