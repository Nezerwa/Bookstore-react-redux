import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
      });
    },
    removeBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
