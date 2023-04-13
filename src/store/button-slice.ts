import { createSlice } from '@reduxjs/toolkit';

interface ButtonState {
  isArtist: boolean;
  isTrack: boolean;
}

const initialState: ButtonState = { isArtist: true, isTrack: false };

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
  },
});

export const buttonAction = buttonSlice.actions;
export default buttonSlice;
