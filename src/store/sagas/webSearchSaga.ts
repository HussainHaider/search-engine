import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
// local imports
import * as actionTypes from '../actionTypes/web';
import * as api from '../../services/webSearchAPI';
import {
  getImages,
  getNews,
  getWeb,
  setAutoComplete,
  setLoadingState,
} from '../reducers/webSlice';
import {
  ImageResponse,
  NewsResponse,
  WebResponse,
  AutoCompleteResponse,
} from '../../interfaces/web';
import { Action } from '../../interfaces/common';

/**
 * @generator
 * @function webSearchSagas
 * @yields {function} This is a watcher Saga which yields an array with the results of calling our sagas. This means
 * the resulting Generators will be started in parallel.
 */
function* webSearchSaga() {
  yield all([
    takeLatest(actionTypes.GET_IMAGES, getImagesSaga),
    takeLatest(actionTypes.GET_NEWS, getNewsSaga),
    takeLatest(actionTypes.GET_WEB_SEARCH, getWebSaga),
    takeLatest(
      actionTypes.GET_SEARCH_SUGGESTIONS,
      getSearchSuggestionSaga,
    ),
  ]);
}

interface dataType {
  type: string;
  payload: {
    searchTerm: string;
    pageNumber: number;
  };
}

/**
 * @generator
 * @function getImagesSaga async call for get images search API and later save in the reducer
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getImagesSaga(data: dataType): Generator<
  // step types
  CallEffect<ImageResponse> | PutEffect<Action>,
  // return type
  void, // intermediate argument
  ImageResponse
> {
  try {
    const response: ImageResponse = yield call(
      api.getImages,
      data.payload.searchTerm,
      data.payload.pageNumber,
    );
    yield put(
      getImages({
        ...response.data,
        pageNumber: data.payload.pageNumber,
      }),
    );
  } catch (error) {
    console.log(error);
  }
}

/**
 * @generator
 * @function getNewsSaga async call for get news search API and later save in the reducer
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getNewsSaga(data: dataType): Generator<
  // step types
  CallEffect<NewsResponse> | PutEffect<Action>,
  // return type
  void, // intermediate argument
  NewsResponse
> {
  try {
    yield put(
      setLoadingState({
        name: 'newsData',
        loading: true,
      }),
    );
    const response: NewsResponse = yield call(
      api.getNews,
      data.payload.searchTerm,
      data.payload.pageNumber,
    );
    yield put(
      getNews({
        ...response.data,
        pageNumber: data.payload.pageNumber,
      }),
    );
  } catch (error) {
    console.log(error);
  }
}

/**
 * @generator
 * @function getWebSaga async call for get web search API and later save in the reducer
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getWebSaga(data: dataType): Generator<
  // step types
  CallEffect<WebResponse> | PutEffect<Action>,
  // return type
  void, // intermediate argument
  WebResponse
> {
  try {
    yield put(
      setLoadingState({
        name: 'webData',
        loading: true,
      }),
    );
    const response: WebResponse = yield call(
      api.getWebSearch,
      data.payload.searchTerm,
      data.payload.pageNumber,
    );
    yield put(
      getWeb({
        ...response.data,
        pageNumber: data.payload.pageNumber,
      }),
    );
  } catch (error) {
    console.log(error);
  }
}

/**
 * @generator
 * @function getSearchSuggestionSaga async call for get web search API and later save in the reducer
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getSearchSuggestionSaga(data: dataType): Generator<
  // step types
  CallEffect<AutoCompleteResponse> | PutEffect<Action>,
  // return type
  void, // intermediate argument
  AutoCompleteResponse
> {
  try {
    const response: AutoCompleteResponse = yield call(
      api.getSearchSuggestion,
      data.payload.searchTerm,
    );
    yield put(setAutoComplete(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default webSearchSaga;
