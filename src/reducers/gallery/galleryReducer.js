import actions from '../../actions/actionTypes';

const DEFAULT_PET = {
  contact: {
    address: {
      city: '',
      state: ''
    },
    emai: '',
    phone: ''
  },
  name: '',
  breeds: {
    primary: '',
    secondary: '',
    mixed: false
  }
};

const defaultGalleryState = {
  pets: [],
  pet: DEFAULT_PET,
  location: ''
};

const galleryReducer = (state = defaultGalleryState, action) => {
  switch (action.type) {
    case actions.SET_PETS:
      return { ...state, pets: action.data };
    case actions.SET_PET:
      return { ...state, pet: action.data };
    case actions.CLEAR_PET:
      return { ...state, pet: DEFAULT_PET };
    case actions.SET_SEARCH_LOCATION:
      return { ...state, location: action.data };
    default:
      return state;
  }
};

export default galleryReducer;

export const getPets = state => state.pets;
export const getLocation = state => state.location;
export const getPet = state => state.pet;
