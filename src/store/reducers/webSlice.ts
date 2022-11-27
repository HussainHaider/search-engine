import { createSlice } from '@reduxjs/toolkit';
//local imports
import { ImagesData, NewsData, WebData } from '../../interfaces/web';

export interface webState {
  value: number;
  imagesData: ImagesData;
  newsData: NewsData;
  webData: WebData;
}

const initialState: webState = {
  value: 0,
  imagesData: {
    totalCount: 0,
    value: [],
  },
  newsData: {
    totalCount: 0,
    value: [],
  },
  webData: {
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
    getNews: (state, action) => {
      state.newsData.totalCount = action.payload.totalCount;
      state.newsData.value = action.payload.value;
    },
    getWeb: (state, action) => {
      state.newsData.totalCount = action.payload.totalCount;
      state.newsData.value = action.payload.value;
    },
  },
});

export const { getImages, getNews, getWeb } = webSlice.actions;

export default webSlice.reducer;
