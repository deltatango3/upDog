import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { getAnimals } from '../../network/requests';
import actions from '../../actions/actionTypes';
import { setRandomDogs } from '../../actions/actionCreators';
import { getAccessToken } from '../../reducers/rootReducer';

function* fetchRandomDogs() {
  try {
    const token = yield select(getAccessToken);
    const response = yield call(getAnimals, token);
    const dogs = response.data.animals;
    yield put(setRandomDogs(dogs));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchFetchRandomDogs() {
  yield takeLatest(actions.FETCH_RANDOM_DOGS, fetchRandomDogs);
}

export default function* rootSaga() {
  yield all([watchFetchRandomDogs()]);
}
