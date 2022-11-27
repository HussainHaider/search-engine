import { AxiosHeaders } from 'axios';
// import { all } from 'redux-saga/effects';
import { call } from 'redux-saga/effects';
// import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

import * as api from '../../services/webSearchAPI';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: AxiosHeaders;
  request?: XMLHttpRequest;
  status?: number;
  statusText?: string;
}

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
 * @function getImagesSaga
 * @param {object} data are the parameters
 * @yields {function}
 */
export function* getImagesSaga(data: {
  type: string;
  searchTerm: string;
  pageNumber: number;
}) {
  try {
    const response: ResponseGenerator = yield call(
      api.getImages,
      data.searchTerm,
      data.pageNumber,
    );
    console.log(response);
    // yield put(getCandidateEducationExperienceSuccess(response.data));
  } catch (error) {
    console.log(error);
    // yield put(getCandidateEducationExperienceFail(errors));
  }
}

export default webSearchSaga;
