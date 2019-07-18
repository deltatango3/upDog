import { all } from 'redux-saga/effects';
import requestSaga from './request/requestSaga';
import gallerySaga from './gallery/gallerySaga';

export default function* rootSaga() {
  yield all([requestSaga(), gallerySaga()]);
}
