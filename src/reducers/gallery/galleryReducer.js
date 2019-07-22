import actions from '../../actions/actionTypes';

const defaultGalleryState = {
  pets: [],
  location: ''
};

const galleryReducer = (state = defaultGalleryState, action) => {
  switch (action.type) {
    case actions.SET_PETS:
      return { ...state, pets: action.data };
    case actions.SET_SEARCH_LOCATION:
      return { ...state, location: action.data };
    default:
      return state;
  }
};

export default galleryReducer;

export const getPets = state => state.pets;
export const getLocation = state => state.location;
