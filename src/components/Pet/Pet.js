import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { getPet } from '../../reducers/rootReducer';
import { fetchPet, clearPet } from '../../actions/actionCreators';
import PetHero from './components/PetHero';

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

  const getPhotos = () =>
    pet.photos.map((photo, index) => (
      <img src={photo.large} alt='' key={index} />
    ));

  return (
    <Grid container direction='column' spacing={5}>
      <PetHero pet={pet} />
      <Grid item container direction='column'>
        <Typography variant='h4' component='h1'>
          {pet.name}
        </Typography>
        <Typography>Gender: {pet.gender}</Typography>
        <Typography>Size: {pet.size}</Typography>
        <Typography>Breed(s): {getBreed()}</Typography>
        <Typography>Age: {pet.age}</Typography>
      </Grid>
      <Grid item container direction='column'>
        <Typography>
          {pet.contact.address.city}, {pet.contact.address.state}
        </Typography>
        <Typography>{pet.contact.address.country}</Typography>
        <Typography>{pet.contact.email}</Typography>
        <Typography>{pet.contact.phone}</Typography>
      </Grid>
      <Grid item>
        <Typography>{pet.description}</Typography>
      </Grid>
      {/* <div>{getPhotos()}</div> */}
    </Grid>
  );
};

export default Pet;
