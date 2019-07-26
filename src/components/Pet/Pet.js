import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPet } from '../../actions/actionCreators';

const Pet = props => {
  const dispatch = useDispatch();
  const idFromGallery = props.history.location.state;

  const getIdFromPath = () => {
    // do something to parse path for ID. After the /.
  };

  const petId = idFromGallery ? idFromGallery : getIdFromPath();

  useEffect(() => {
    dispatch(fetchPet(petId));
  }, []);

  return <h1>Pet Page</h1>;
};

export default Pet;
