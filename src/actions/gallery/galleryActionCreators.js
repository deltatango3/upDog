import actions from '../actionTypes';

export const fetchPets = data => ({
  type: actions.FETCH_PETS,
  data
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
