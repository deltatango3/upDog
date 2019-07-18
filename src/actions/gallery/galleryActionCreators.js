import actions from '../actionTypes';

export const fetchRandomDogs = () => ({
  type: actions.FETCH_RANDOM_DOGS
});

export const setRandomDogs = data => ({
  type: actions.SET_RANDOM_DOGS,
  data
});
