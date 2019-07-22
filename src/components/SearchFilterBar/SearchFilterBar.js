import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { fetchPets } from '../../actions/actionCreators';
import SearchField from './components/SearchField';
import { getLocation } from '../../reducers/rootReducer';

const SearchFilterBar = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => getLocation(state));
  const submitDisabled = !location;

  const onSubmit = () => {
    const parameters = {
      location,
      // temporary type until we can have more types
      type: 'dog'
    };
    dispatch(fetchPets(parameters));
  };

  return (
    <Grid container justify='flex-end'>
      <SearchField />
      <Button variant='contained' onClick={onSubmit} disabled={submitDisabled}>
        Search
      </Button>
    </Grid>
  );
};

export default SearchFilterBar;
