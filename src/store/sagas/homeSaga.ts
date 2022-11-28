import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
// local imports
import * as actionTypes from '../actionTypes/home';
import * as api from '../../services/homeAPI';
import {
  getWeather,
  getHeadlines,
  setLocation,
} from '../reducers/homeSlice';
import {
  WeatherResponse,
  HeadlinesResponse,
  LocationResponse,
} from '../../interfaces/home';
import { Action } from '../../interfaces/common';
import { getWeatherAction } from '../actions/home';

/**
 * @generator
 * @function homeSagas
 * @yields {function} This is a watcher Saga which yields an array with the results of calling our sagas. This means
 * the resulting Generators will be started in parallel.
 */
function* homeSaga() {
  yield all([
    takeLatest(actionTypes.GET_WEATHER, getWeatherSaga),
    takeLatest(actionTypes.GET_HEADLINES, getHeadlinesSaga),
    takeLatest(actionTypes.GET_LOCATION, getLocationSaga),
  ]);
}

interface dataType {
  type: string;
  payload: {
    searchTerm: string;
  };
}

/**
 * @generator
 * @function getWeatherSaga async call for get images search API
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getWeatherSaga(data: dataType): Generator<
  // step types
  CallEffect<WeatherResponse> | PutEffect<Action>,
  // return type
  void, // intermediate argument
  WeatherResponse
> {
  try {
    const response: WeatherResponse = yield call(
      api.getWeatherUpdates,
      data.payload.searchTerm,
    );
    yield put(getWeather(response.data));
  } catch (error) {
    console.log(error);
  }
}

/**
 * @generator
 * @function getHeadlinesSaga async call for get images search API
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getHeadlinesSaga(data: dataType): Generator<
  // step types
  CallEffect<HeadlinesResponse> | PutEffect<Action>,
  // return type
  void, // intermediate argument
  HeadlinesResponse
> {
  try {
    const response: HeadlinesResponse = yield call(
      api.getHomeNews,
      data.payload.searchTerm,
    );
    yield put(getHeadlines(response.data));
  } catch (error) {
    console.log(error);
  }
}

/**
 * @generator
 * @function getLocationSaga async call for get images search API
 * @yields {function}
 */
export function* getLocationSaga() {
  try {
    const response: LocationResponse = yield call(api.getLocation);
    const { data } = response;
    yield put(setLocation(data));
    yield put(getWeatherAction(data.latitude, data.longitude));
  } catch (error) {
    console.log(error);
  }
}

export default homeSaga;
