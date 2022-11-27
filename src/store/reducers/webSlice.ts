import { createSlice } from '@reduxjs/toolkit';
//local imports
import { ImagesData, News, WebData } from '../../interfaces/web';

export interface webState {
  value: number;
  imagesData: ImagesData;
  newsData: {
    totalCount: number;
    data: {
      [key: number]: Array<News>;
    };
  };
  webData: WebData;
  autoComplete: {
    isSearching: boolean; // added this state to show the suggestion and don't add empty data in the array while it is true
    data: string[];
  };
}

const initialState: webState = {
  value: 0,
  imagesData: {
    totalCount: 0,
    value: [],
  },
  newsData: {
    totalCount: 0,
    data: {},
  },
  webData: {
    totalCount: 0,
    value: [],
  },
  autoComplete: {
    isSearching: false,
    data: [
      'download',
      'dog',
      'download free',
      'download mp3',
      'domain',
      'donald trump',
      'doctors',
      'download pdf',
      'documentation',
      'double',
    ],
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
      state.newsData.data = {
        ...state.newsData.data,
        [action.payload.pageNumber]: action.payload.value,
      };
    },
    getWeb: (state, action) => {
      state.newsData.totalCount = action.payload.totalCount;
      state.newsData.data = action.payload.value;
    },
    setAutoComplete: (state, action) => {
      state.autoComplete.isSearching = true;
      if (action.payload) {
        state.autoComplete.data = action.payload;
      }
    },
    clearAutoComplete: (state) => {
      state.autoComplete.isSearching = false;
      state.autoComplete.data = [];
    },
  },
});

export const {
  getImages,
  getNews,
  getWeb,
  setAutoComplete,
  clearAutoComplete,
} = webSlice.actions;

export default webSlice.reducer;
