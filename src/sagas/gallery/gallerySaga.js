import { all, call, takeLatest, put } from 'redux-saga/effects';
import { apiFetchPets, apiFetchPet } from '../../network/requests';
import actions from '../../actions/actionTypes';
import { setPets, setPet } from '../../actions/actionCreators';

function* fetchPets(action) {
  try {
    const response = yield call(apiFetchPets, action.data);
    const pets = response.data.animals;
    yield put(setPets(pets));
  } catch (error) {
    console.log(error.message);
  }
}

function* fetchPet(action) {
  try {
    const response = yield call(apiFetchPet, action.data);
    const pet = response.data.animal;
    yield put(setPet(pet));
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
