import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomDogs, fetchPets } from '../../actions/actionCreators';
import { getAccessToken, getPets } from '../../reducers/rootReducer';
import Gallery from '../Gallery/Gallery';
import SearchFilterBar from '../SearchFilterBar/SearchFilterBar';

const styles = makeStyles({
  wrapper: {
    justifyContent: 'center',
    maxWidth: 'calc(1200px + 4rem)',
    padding: '0 2rem'
  }
});

const Main = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const token = useSelector(state => getAccessToken(state));
  const pets = useSelector(state => getPets(state));

  useEffect(() => {
    if (token) {
      dispatch(fetchPets());
    }
  }, [token]);

  return (
    <div className={classes.wrapper}>
      <SearchFilterBar />
      <Gallery pets={pets} />
    </div>
  );
};

export default Main;
