import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getToken } from '../../network/requests';
import { setAccessToken } from '../../actions/actionCreators';
import actions from '../../actions/actionTypes';

function* fetchAccessToken() {
  try {
    const response = yield call(getToken);
    const token = response.data.access_token;
    yield put(setAccessToken(token));
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
