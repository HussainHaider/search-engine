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

import { getWeather, getHeadlines } from '../reducers/homeSlice';
import {
  WeatherResponse,
  HeadlinesResponse,
} from '../../interfaces/home';

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
  | CallEffect<WeatherResponse>
  | PutEffect<{
      payload: any;
      type: 'home/getWeather';
    }>,
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
  | CallEffect<HeadlinesResponse>
  | PutEffect<{
      payload: any;
      type: 'home/getHeadlines';
    }>,
  // return type
  void, // intermediate argument
  HeadlinesResponse
> {
  try {
    const resp = {
      data: {
        status: 'OK',
        request_id: '3643eee6-9965-4f68-948e-09a348fd1c33',
        data: [
          {
            title:
              'It’s like homecoming for me, says Kesha Ram on Lahore visit',
            link: 'https://www.pakistantoday.com.pk/2022/11/27/its-like-homecoming-for-me-says-kesha-ram-on-lahore-visit/',
            photo_url:
              'https://www.pakistantoday.com.pk/wp-content/uploads/2022/11/Ganga-Rams-granddaughter.jpg',
            published_datetime_utc: '2022-11-27T14:13:48.000Z',
            source_url: 'https://www.pakistantoday.com.pk',
            source_logo_url: null,
            source_favicon_url:
              'https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.pakistantoday.com.pk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL',
          },
          {
            title:
              'Radiotherapy unit to be set up in Children’s Hospital',
            link: 'https://www.nation.com.pk/27-Nov-2022/radiotherapy-unit-to-be-set-up-in-children-s-hospital',
            photo_url:
              'https://www.nation.com.pk/assets/thenation/images/no-image-large.jpg',
            published_datetime_utc: '2022-11-27T04:20:01.000Z',
            source_url: 'https://www.nation.com.pk',
            source_logo_url:
              'https://lh3.googleusercontent.com/fD1k3PZ8GP-LBie9XAPX13lS8FtU-LDTCN_ijqi3oquM2thXhzyyTyfOBKlzhaACCnGnAYhSPm8',
            source_favicon_url:
              'https://encrypted-tbn3.gstatic.com/faviconV2?url=https://www.nation.com.pk&client=NEWS_360&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL',
          },
        ],
      },
    };
    yield put(getHeadlines(resp.data));
    yield call(api.getHomeNews, data.payload.searchTerm);
  } catch (error) {
    console.log(error);
  }
}

export default homeSaga;
