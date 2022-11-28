import { createSlice } from '@reduxjs/toolkit';
//local imports
import { ImagesData, News, Web } from '../../interfaces/web';

interface dataType<T> {
  [key: number]: Array<T>;
}

interface ImageSate extends ImagesData {
  isNextPageLoading: boolean;
  pageNumber: number;
}

export interface webState {
  value: number;
  imagesData: ImageSate;
  newsData: {
    isLoading: boolean;
    totalCount: number;
    data: dataType<News>;
  };
  webData: {
    isLoading: boolean;
    totalCount: number;
    relatedSearch: string[];
    data: dataType<Web>;
  };
  autoComplete: {
    isSearching: boolean; // added this state to show the suggestion and don't add empty data in the array while it is true
    data: string[];
  };
}

const initialState: webState = {
  value: 0,
  imagesData: {
    isNextPageLoading: false,
    pageNumber: 1,
    totalCount: 0,
    value: [],
  },
  newsData: {
    isLoading: false,
    totalCount: 0,
    data: {},
  },
  webData: {
    isLoading: false,
    totalCount: 0,
    relatedSearch: [],
    data: {},
  },
  autoComplete: {
    isSearching: false,
    data: [],
  },
};

export const webSlice = createSlice({
  name: 'web',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getImages: (state, action) => {
      state.imagesData.totalCount = action.payload.totalCount;
      state.imagesData.value = [
        ...state.imagesData.value,
        ...action.payload.value,
      ];
      state.imagesData.pageNumber = action.payload.pageNumber;
    },
    getNews: (state, action) => {
      state.newsData.totalCount = action.payload.totalCount;
      state.newsData.isLoading = false;
      state.newsData.data = {
        ...state.newsData.data,
        [action.payload.pageNumber]: action.payload.value,
      };
    },
    getWeb: (state, action) => {
      state.webData.totalCount = action.payload.totalCount;
      state.webData.relatedSearch = action.payload.relatedSearch;
      state.webData.isLoading = false;
      state.webData.data = {
        ...state.webData.data,
        [action.payload.pageNumber]: action.payload.value,
      };
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
    setLoadingState: (state, action) => {
      const name: 'webData' | 'newsData' = action.payload.name;
      state[`${name}`].isLoading = action.payload.loading;
    },
  },
});

export const {
  getImages,
  getNews,
  getWeb,
  setAutoComplete,
  clearAutoComplete,
  setLoadingState,
} = webSlice.actions;

export default webSlice.reducer;
