import { combineReducers } from 'redux';
import requestReducer, * as requestSelectors from './requests/requestReducer';
import galleryReducer, * as gallerySelectors from './gallery/galleryReducer';

const reducers = combineReducers({
  request: requestReducer,
  gallery: galleryReducer
});

export default reducers;

export const getAccessToken = state =>
  requestSelectors.getAccessToken(state.request);

export const getPets = state => gallerySelectors.getPets(state.gallery);
