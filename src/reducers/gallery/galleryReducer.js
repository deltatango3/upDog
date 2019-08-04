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
  },
  photos: [{ large: '' }]
};

const defaultGalleryState = {
  pets: [],
  pet: DEFAULT_PET,
  location: '',
  page: 1,
  type: 'dog',
  isLoading: false
};

const galleryReducer = (state = defaultGalleryState, action) => {
  switch (action.type) {
    case actions.SET_PETS:
      return { ...state, pets: [...state.pets, ...action.data] };
    case actions.SET_PET:
      return { ...state, pet: action.data };
    case actions.CLEAR_PET:
      return { ...state, pet: DEFAULT_PET };
    case actions.SET_SEARCH_LOCATION:
      return { ...state, location: action.data };
    case actions.SET_PAGE:
      return { ...state, page: action.data };
    case actions.SET_GALLERY_IS_LOADING:
      return { ...state, isLoading: true };
    case actions.SET_GALLERY_IS_DONE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default galleryReducer;

export const getPets = state => state.pets;
export const getLocation = state => state.location;
export const getPage = state => state.page;
export const getPet = state => state.pet;
export const getType = state => state.type;
export const getIsLoadingState = state => state.isLoading;
