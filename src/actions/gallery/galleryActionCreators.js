import actions from '../actionTypes';

export const fetchPets = data => ({
  type: actions.FETCH_PETS,
  data
});

export const setPets = data => ({
  type: actions.SET_PETS,
  data
});

export const fetchPet = (data, history) => ({
  type: actions.FETCH_PET,
  data,
  history
});

export const setPet = data => ({
  type: actions.SET_PET,
  data
});
