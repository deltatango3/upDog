import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { apiFetchPets, apiFetchPet } from '../../network/requests';
import actions from '../../actions/actionTypes';
import { setPets, setPet } from '../../actions/actionCreators';
import { getAccessToken } from '../../reducers/rootReducer';
import ROUTE_URLS from '../../routes/routeUrls';

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

function* fetchPet(action) {
  try {
    const token = yield select(getAccessToken);
    const response = yield call(apiFetchPet, token, action.data);
    const pet = response.data.animal;
    yield put(setPet(pet));
    yield call(action.history.push, ROUTE_URLS.PET, pet.id);
  } catch (error) {
    console.log(error.message);
  }
}

function* watchFetchPets() {
  yield takeLatest(actions.FETCH_PETS, fetchPets);
}

function* watchFetchPet() {
  yield takeLatest(actions.FETCH_PET, fetchPet);
}

export default function* rootSaga() {
  yield all([watchFetchPets(), watchFetchPet()]);
}
