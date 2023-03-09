import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const storedBooks = useSelector((state) => state.books);

  const addNewBook = (e, newBook) => {
    e.preventDefault();
    dispatch(addBook(newBook));
  };
  const removeExistingBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <>
      {storedBooks.map((item) => (
        <Book
          title={item.title}
          key={item.id}
          author={item.author}
          id={item.id}
          removeExistingBook={removeExistingBook}
        />
      ))}
      <AddBook addNewBook={addNewBook} />
    </>
  );
};

export default Books;
