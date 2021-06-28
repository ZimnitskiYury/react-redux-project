import {
  call, put, takeEvery, all,
} from '@redux-saga/core/effects';
import {
  REQUESTBEERS, SEARCHBEERS, LOADNEXT, ADDBEERS,
} from 'Modules/landing-page/constants/searchBeersConstants';
import { getDataByParams } from 'Services/punkService';


export function* searchBeerWorker(action) {
  const payload = yield call(
    getDataByParams,
    action.payload,
  );
  yield put({
    type: REQUESTBEERS,
    payload,
  });
}

export function* searchBeerWatcher() {
  yield takeEvery(
    SEARCHBEERS,
    searchBeerWorker,
  );
}

export function* loadNextWorker(action) {
  const payload = yield call(
    getDataByParams,
    action.payload,
  );
  yield put({
    type: ADDBEERS,
    payload,
  });
}

export function* loadNextWatcher() {
  yield takeEvery(
    LOADNEXT,
    loadNextWorker,
  );
}

export default function* searchSagas() {
  yield all([
    searchBeerWatcher(),
    loadNextWatcher(),
  ]);
}
