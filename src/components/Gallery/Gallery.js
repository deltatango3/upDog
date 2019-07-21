import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PetCard from '../PetCard/PetCard';

const styles = makeStyles({
  gallery: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 'calc(1200px + 4rem)',
    padding: '0 2rem'
  }
});

const Gallery = props => {
  const classes = styles();

  const getPetCards = () =>
    props.pets.map(pet => <PetCard key={pet.id} pet={pet} />);

  return <div className={classes.gallery}>{getPetCards()}</div>;
};

export default Gallery;
