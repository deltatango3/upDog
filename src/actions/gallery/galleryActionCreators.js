import actions from '../actionTypes';

export const fetchPets = () => ({
  type: actions.FETCH_PETS
});

export const setPets = data => ({
  type: actions.SET_PETS,
  data
});

export const fetchPet = data => ({
  type: actions.FETCH_PET,
  data
});

export const setPet = data => ({
  type: actions.SET_PET,
  data
});

export const clearPet = () => ({
  type: actions.CLEAR_PET
});

export const setPage = data => ({
  type: actions.SET_PAGE,
  data
});

export const setGalleryIsLoading = () => ({
  type: actions.SET_GALLERY_IS_LOADING
});

export const setGalleryIsDoneLoading = () => ({
  type: actions.SET_GALLERY_IS_DONE_LOADING
});
