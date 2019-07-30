import { all, call, takeLatest } from 'redux-saga/effects';
import { getToken } from '../../network/requests';
import actions from '../../actions/actionTypes';

function* fetchAccessToken() {
  try {
    const response = yield call(getToken);
    const token = response.data.access_token;
    localStorage.setItem('token', token);
  } catch (error) {
    console.log(error.message);
  }
}

function* watchFetchAccessToken() {
  yield takeLatest(actions.FETCH_ACCESS_TOKEN, fetchAccessToken);
}

export default function* rootSaga() {
  yield all([watchFetchAccessToken()]);
}
