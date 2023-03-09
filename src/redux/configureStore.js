import { configureStore, combineReducers } from '@reduxjs/toolkit';
import BooksReducer from './books/books';
import CategoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  BooksReducer,
  CategoriesReducer,
});

export default configureStore({
  reducer: rootReducer,
});
