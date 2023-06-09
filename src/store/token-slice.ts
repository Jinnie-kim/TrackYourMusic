import { createSlice } from '@reduxjs/toolkit';

interface TokenState {
  accessToken: string;
}

const initialState: TokenState = { accessToken: '' };

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    getToken(state, action) {
      const token = action.payload;
      state.accessToken = token;
    },
  },
});

export const tokenAction = tokenSlice.actions;
export default tokenSlice;
