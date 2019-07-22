import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { getLocation } from '../../../reducers/rootReducer';
import { setSearchLocation } from '../../../actions/actionCreators';

const Search = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => getLocation(state));

  const onTextChange = event => {
    dispatch(setSearchLocation(event.target.value));
  };

  return (
    <TextField
      label='Search by location'
      value={location}
      onChange={onTextChange}
    />
  );
};

export default Search;
