import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPets } from '../../actions/actionCreators';
import { getPets } from '../../reducers/rootReducer';
import Gallery from '../Gallery/Gallery';
import SearchFilterBar from '../SearchFilterBar/SearchFilterBar';

const styles = makeStyles({
  wrapper: {
    justifyContent: 'center',
    maxWidth: 'calc(1200px + 4rem)',
    padding: '0 2rem'
  }
});

const Main = props => {
  const classes = styles();
  const dispatch = useDispatch();
  const pets = useSelector(state => getPets(state));

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <SearchFilterBar />
      <Gallery pets={pets} history={props.history} />
    </div>
  );
};

export default Main;
