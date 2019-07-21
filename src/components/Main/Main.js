import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomDogs } from '../../actions/actionCreators';
import { getAccessToken, getPets } from '../../reducers/rootReducer';
import Gallery from '../Gallery/Gallery';

const Main = props => {
  const dispatch = useDispatch();
  const token = useSelector(state => getAccessToken(state));
  const pets = useSelector(state => getPets(state));

  useEffect(() => {
    if (token) {
      dispatch(fetchRandomDogs());
    }
  }, [token]);

  return <Gallery pets={pets} />;
};

export default Main;
