import actions from '../actionTypes';

export const fetchAccessToken = () => ({
  type: actions.FETCH_ACCESS_TOKEN
});

export const setAccessToken = data => ({
  type: actions.SET_ACCESS_TOKEN,
  data
});

export const fetchRandomDogs = () => ({
  type: actions.FETCH_RANDOM_DOGS
});
