import {
  put,
  call,
  // takeLatest,
  takeEvery
} from 'redux-saga/effects'

import * as actionTypes from '../actionTypes/actionTypes'

import { getAxios, postAxios } from '../api/api';

const apiHost = process.env.REACT_APP_API_HOST;
const loaclapiHost = process.env.REACT_APP_LOCAL_API_HOST;
console.log(process.env)

function* getCategory() {
  const url = `${apiHost}category`
  const categoriesData = yield call(getAxios, url)
  const options = categoriesData.data.Items.map((v) => ({
    label: v.name, value: v.name
  }))
  yield put({ type: actionTypes.GET_CATGORIES, payload: { categories: categoriesData.data.Items, categoryOptions: options } })
}

function* getAllExpenditures(action) {
  const url = `${apiHost}expenditure/`
  const data = action.payload;
  const expenditureData = yield call(postAxios, url, data)
  yield put({ type: actionTypes.GET_ALL_EXPENDITURES, payload: expenditureData.data })
}

function* addExpenditure(action) {
  const url = `${apiHost}expenditure/addExpenditure`
  const data = action.payload;
  const newExpenditureData = yield call(postAxios, url, data)
  yield put({ type: actionTypes.ADD_EXPENDITURES, payload: newExpenditureData.data })
}


export default function* rootSaga() {
  yield takeEvery(actionTypes.GET_ALL_EXPENDITURES_API, getAllExpenditures)
  yield takeEvery(actionTypes.GET_CATGORIES_API, getCategory)
  yield takeEvery(actionTypes.ADD_EXPENDITURES_API, addExpenditure)
}