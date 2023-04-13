import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './token-slice';
import buttonSlice from './button-slice';

const store = configureStore({
  reducer: { token: tokenSlice.reducer, button: buttonSlice.reducer },
});

export default store;
