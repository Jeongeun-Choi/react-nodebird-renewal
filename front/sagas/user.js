import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST
} from "../reducers/user";

function logInAPI() {
  return axios.post("/api/login");
}

//요청의 결과를 받을 수 있다.
function* logIn(action) {
  try {
    // const result = yield call(logInAPI);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      data: err.response.data
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function logOutAPI() {
  return axios.post("/api/logout");
}

//요청의 결과를 받을 수 있다.
function* logOut(action) {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: err.response.data
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function signUpAPI() {
  return axios.post("/api/signup");
}

//요청의 결과를 받을 수 있다.
function* signUp(action) {
  try {
    // const result = yield call(singUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      data: err.response.data
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
