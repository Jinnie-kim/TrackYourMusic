import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  isArtist: boolean;
  isTrack: boolean;
  term: string;
}

const initialState: ButtonState = { isArtist: true, isTrack: false, term: 'short_term' };

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    isArtist(state, action) {
      state.isArtist = action.payload;
      state.isTrack = false;
    },
    isTrack(state, action) {
      state.isTrack = action.payload;
      state.isArtist = false;
    },
    selectTerm(state, action) {
      state.term = action.payload;
    },
  },
});

export const buttonAction = buttonSlice.actions;
export default buttonSlice;
