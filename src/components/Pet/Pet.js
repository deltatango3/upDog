import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPet } from '../../reducers/rootReducer';
import { fetchPet, clearPet } from '../../actions/actionCreators';

const Pet = () => {
  const dispatch = useDispatch();
  const pet = useSelector(state => getPet(state));

  const getIdEnteredByUser = () => {
    const path = window.location.pathname;
    const splitPath = path.split('/');
    const id = splitPath[2];
    return id;
  };

  useEffect(() => {
    dispatch(fetchPet(getIdEnteredByUser()));
    return () => {
      dispatch(clearPet());
    };
  }, [dispatch]);

  console.log(pet);

  const getBreed = () => {
    if (pet.breeds.secondary) {
      return `${pet.breeds.primary} & ${pet.breeds.secondary}`;
    }
    return pet.breeds.primary;
  };

  return (
    <Fragment>
      <div>
        {pet.contact.address.city}
        {pet.contact.address.state}
        {pet.contact.email}
        {pet.contact.phone}
      </div>
      <div>
        {pet.name}
        {pet.gender}
        {pet.size}
        {getBreed()}
      </div>
    </Fragment>
  );
};

export default Pet;
