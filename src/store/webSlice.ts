import { createSlice } from '@reduxjs/toolkit';
import { ImageResponse } from '../interfaces/web';

export interface CounterState {
  value: number;
  imagesData: ImageResponse;
}

const initialState: CounterState = {
  value: 0,
  imagesData: {
    totalCount: 0,
    value: [],
  },
};

export const webSlice = createSlice({
  name: 'web',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getImages: (state, action) => {
      state.imagesData.totalCount = action.payload.totalCount;
      state.imagesData.value = action.payload.value;
    },
  },
});

export const { getImages } = webSlice.actions;

export default webSlice.reducer;
