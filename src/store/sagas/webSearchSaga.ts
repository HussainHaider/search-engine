// import { all } from 'redux-saga/effects';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';

import * as api from '../../services/webSearchAPI';
import { getImages } from '../webSlice';
import { ImageResponse } from '../../interfaces/web';

/**
 * @generator
 * @function candidateSaga
 * @yields {function} This is a watcher Saga which yields an array with the results of calling our sagas. This means
 * the resulting Generators will be started in parallel.
 */
function* webSearchSaga() {
  yield takeLatest('GET_IMAGES', getImagesSaga);
}

/**
 * @generator
 * @function getImagesSaga async call for get images search API
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getImagesSaga(data: {
  type: string;
  searchTerm: string;
  pageNumber: number;
}): Generator<
  // step types
  | CallEffect<ImageResponse>
  | PutEffect<{
      payload: any;
      type: 'web/getImages';
    }>,
  // return type
  void, // intermediate argument
  ImageResponse
> {
  try {
    const response: ImageResponse = yield call(
      api.getImages,
      data.searchTerm,
      data.pageNumber,
    );
    yield put(getImages(response.data));
  } catch (error) {
    console.log(error);
    // yield put(getCandidateEducationExperienceFail(errors));
  }
}

export default webSearchSaga;
