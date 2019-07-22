import actions from '../actionTypes';

export const fetchPets = data => ({
  type: actions.FETCH_PETS,
  data
});

export const setPets = data => ({
  type: actions.SET_PETS,
  data
});
