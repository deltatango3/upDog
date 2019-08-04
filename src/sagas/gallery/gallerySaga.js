import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { apiFetchPets, apiFetchPet } from '../../network/requests';
import actions from '../../actions/actionTypes';
import {
  setPets,
  setPet,
  setGalleryIsLoading,
  setGalleryIsDoneLoading
} from '../../actions/actionCreators';
import { getPage, getLocation, getType } from '../../reducers/rootReducer';

function* fetchPets() {
  try {
    // get the next page
    yield put(setGalleryIsLoading());
    const page = yield select(getPage);
    const location = yield select(getLocation);
    const type = yield select(getType);
    const parameters = { page, location, type };
    const response = yield call(apiFetchPets, parameters);
    const pets = response.data.animals;
    yield put(setPets(pets));
    yield put(setGalleryIsDoneLoading());
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
