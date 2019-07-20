import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomDogs } from '../../actions/actionCreators';
import { getAccessToken } from '../../reducers/rootReducer';

const Main = props => {
  const dispatch = useDispatch();
  const token = useSelector(state => getAccessToken(state));

  useEffect(() => {
    if (token) {
      dispatch(fetchRandomDogs());
    }
  }, [token]);

  return (
    <Fragment>
      <h1>Main Page</h1>
    </Fragment>
  );
};

export default Main;
