import {
  call, put, takeEvery, all,
} from '@redux-saga/core/effects';
import { authUser } from 'Services/auth-services/auth-service';
import { register } from '../actions/authActions';
import {
  AUTH_SUCCESS, LOGIN, LOGOUT, REGISTER,
} from '../constants/authConstants';


export function* registerWorker(action) {
  const payload = yield call(
    register,
    ...action.payload,
  );
  yield put({
    type: AUTH_SUCCESS,
    payload,
  });
}

export function* registerWatcher() {
  yield takeEvery(
    REGISTER,
    registerWorker,
  );
}

export function* loginWorker(action) {
  const user = yield call(
    authUser,
    ...action.payload,
  );
  yield put({
    type: AUTH_SUCCESS,
    user,
  });
}

export function* loginWatcher() {
  yield takeEvery(
    LOGIN,
    loginWorker,
  );
}

export default function* authSagas() {
  yield all([
    registerWatcher(),
    loginWatcher(),
  ]);
}
