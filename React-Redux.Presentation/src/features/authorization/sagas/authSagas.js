import {
  call, put, takeEvery, all,
} from '@redux-saga/core/effects';
import { saveUser } from 'Services/auth-service/authHelper';
import { authUser, registerUser } from 'Services/auth-service/authService';
import {
  AUTH_SUCCESS, LOGIN, REGISTER,
} from '../constants/authConstants';


export function* registerWorker(action) {
  const user = yield call(
    registerUser,
    ...action.payload,
  );
  yield saveUser(user);
  yield put({
    type: AUTH_SUCCESS,
    user,
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
  yield saveUser(user);
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
