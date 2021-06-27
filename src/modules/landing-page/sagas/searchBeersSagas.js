import {
  call, put, takeEvery, all,
} from '@redux-saga/core/effects';
import {
  INITIAL, REQUESTBEERS, SEARCHBEERS, LOADNEXT, ADDBEERS,
} from 'Modules/landing-page/constants/searchBeersConstants';
import { getData } from 'Services/connect';


export function* initBeerWorker() {
  const payload = yield call(getData);
  yield put({ type: REQUESTBEERS, payload });
}

export function* initBeerWatcher() {
  yield takeEvery(INITIAL, initBeerWorker);
}

export function* searchBeerWorker(action) {
  const payload = yield call(getData, action.payload);
  yield put({ type: REQUESTBEERS, payload });
}

export function* searchBeerWatcher() {
  yield takeEvery(SEARCHBEERS, searchBeerWorker);
}

export function* loadNextWorker(action) {
  const payload = yield call(getData, action.payload);
  yield put({ type: ADDBEERS, payload });
}

export function* loadNextWatcher() {
  yield takeEvery(LOADNEXT, loadNextWorker);
}

export default function* searchSagas() {
  yield all(
    [searchBeerWatcher(), initBeerWatcher(), loadNextWatcher()],
  );
}
