import axios from 'axios';
import config from './config';
import urls from './urls';

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
    url: urls.randomDogs,
    method: `get`,
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};
