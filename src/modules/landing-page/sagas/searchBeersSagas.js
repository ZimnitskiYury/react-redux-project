import { call, put, takeEvery } from '@redux-saga/core/effects';
import { INITIAL, REQUESTBEERS } from 'Modules/landing-page/constants/searchBeersConstants';
import getData from 'Services/connect';

export function* sagaWorker() {
  const payload = yield call(getData);
  yield put({ type: INITIAL, payload });
}

export function* sagaWatcher() {
  yield takeEvery(REQUESTBEERS, sagaWorker);
}

export default { sagaWorker, sagaWatcher };
