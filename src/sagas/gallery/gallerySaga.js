import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { getAnimals, apiFetchPets } from '../../network/requests';
import actions from '../../actions/actionTypes';
import { setPets } from '../../actions/actionCreators';
import { getAccessToken } from '../../reducers/rootReducer';

function* fetchPets(action) {
  try {
    const token = yield select(getAccessToken);
    const response = yield call(apiFetchPets, token, action.data);
    const pets = response.data.animals;
    yield put(setPets(pets));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchFetchPets() {
  yield takeLatest(actions.FETCH_PETS, fetchPets);
}

export default function* rootSaga() {
  yield all([watchFetchPets()]);
}
