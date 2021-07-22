import {
  call, put, takeEvery, all,
} from '@redux-saga/core/effects';

import {
  REQUESTBEERS, SEARCHBEERS, ADDBEERS, LOADMORE,
} from 'modules/landing-page/constants/searchBeersConstants';
import { getDataByParams } from 'services/beer-service/punkService';


export function* searchBeerWorker(action) {
  yield put({
    type: REQUESTBEERS,
    payload: [],
  });
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
    LOADMORE,
    loadNextWorker,
  );
}

export default function* searchSagas() {
  yield all([
    searchBeerWatcher(),
    loadNextWatcher(),
  ]);
}
