import actions from '../../actions/actionTypes';

const defaultRequestState = {
  accessToken: ''
};

const requestReducer = (state = defaultRequestState, action) => {
  switch (action.type) {
    case actions.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.data };
    default:
      return state;
  }
};

export default requestReducer;

export const getAccessToken = state => state.accessToken;
