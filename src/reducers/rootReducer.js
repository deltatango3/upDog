import { combineReducers } from 'redux';
import galleryReducer, * as gallerySelectors from './gallery/galleryReducer';

const reducers = combineReducers({
  gallery: galleryReducer
});

export default reducers;

export const getPets = state => gallerySelectors.getPets(state.gallery);
export const getPet = state => gallerySelectors.getPet(state.gallery);
export const getLocation = state => gallerySelectors.getLocation(state.gallery);
export const getPage = state => gallerySelectors.getPage(state.gallery);
export const getType = state => gallerySelectors.getType(state.gallery);
export const getIsLoadingState = state =>
  gallerySelectors.getIsLoadingState(state.gallery);
