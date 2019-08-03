import axios from 'axios';
import config from './config';
import urls from './urls';

const getQueryParams = parameters => {
  const { type, page, location } = parameters;
  const params = {
    type,
    page
  };

  if (location) params.location = location;

  return params;
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

export const apiFetchPets = parameters => {
  const params = getQueryParams(parameters);
  return axios({
    url: urls.pets,
    method: `get`,
    params,
    headers: {
      Authorization: 'Bearer ' + config.token
    }
  });
};

export const apiFetchPet = id => {
  return axios({
    url: urls.pet(id),
    method: `get`,
    headers: {
      Authorization: 'Bearer ' + config.token
    }
  });
};
