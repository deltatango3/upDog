import axios from 'axios';
import config from './config';
import urls from './urls';

const DEFAULT_PARAMETERS = {
  type: 'dog'
};

export const getToken = () => {
  return axios({
    url: `https://api.petfinder.com/v2/oauth2/token`,
    method: `post`,
    auth: {
      username: config.apiKey,
      password: config.secret
    },
    data: {
      grant_type: `client_credentials`
    }
  });
};

export const getAnimals = token => {
  return axios({
    url: urls.pets,
    method: `get`,
    params: {
      type: 'dog'
    },
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

export const apiFetchPets = (token, parameters = DEFAULT_PARAMETERS) => {
  return axios({
    url: urls.pets,
    method: `get`,
    params: parameters,
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

export const apiFetchPet = (token, id) => {
  return axios({
    url: urls.pet(id),
    method: `get`,
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};
