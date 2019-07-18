import actions from '../../actions/actionTypes';

const defaultGalleryState = {
  pets: []
};

const galleryReducer = (state = defaultGalleryState, action) => {
  switch (action.type) {
    case actions.SET_RANDOM_DOGS:
      return { ...state, pets: action.data };
    default:
      return state;
  }
};

export default galleryReducer;

export const getPets = state => state.pets;
