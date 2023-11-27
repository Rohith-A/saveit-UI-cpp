import {
  put,
  call,
  // takeLatest,
  takeEvery
} from 'redux-saga/effects'

import * as actionTypes from '../actionTypes/actionTypes'

import { getAxios } from '../api/api';

const apiHost = process.env.REACT_APP_API_HOST;
console.log(process.env)
function* getTodos() {
  const url = `${apiHost}harrypotter/characters`
  const todos = yield call(getAxios, url)
  yield put({ type: actionTypes.TEST, payload: todos })
}

function* signUpUser() {
  const url = `${apiHost}harrypotter/characters`
  const todos = yield call(getAxios, url)
  yield put({ type: actionTypes.TEST, payload: todos })
}


export default function* rootSaga() {
  yield takeEvery(actionTypes.TEST_API, getTodos)
  yield takeEvery(actionTypes.SIGN_UP_API, signUpUser)
}