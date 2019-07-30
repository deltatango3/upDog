import React from 'react';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  hero: props => ({
    backgroundImage: `url(${props.pet.photos[0].large})`
  })
});

const PetHero = props => {
  const classes = styles(props);

  return (
    <div className={classes.hero}>
      <div />
    </div>
  );
};

export default PetHero;
