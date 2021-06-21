import { call, put, takeEvery } from '@redux-saga/core/effects';
import getData from '../../../services/connect';
import { INITIAL, REQUESTBEERS } from '../constants/searchBeersConstants';

function* sagaWorker() {
  const payload = yield call(getData);
  yield put({ type: INITIAL, payload });
}

export default function* sagaWatcher() {
  yield takeEvery(REQUESTBEERS, sagaWorker);
}
