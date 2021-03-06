import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid
} from '@material-ui/core';
import ROUTE_URLS from '../../routes/routeUrls';

const styles = makeStyles(theme => ({
  card: {
    flex: '1 0 calc(300px - 1rem)',
    margin: '.5rem 1rem .5rem 0rem',
    '&:nth-child(4n)': {
      marginRight: '0'
    },
    [theme.breakpoints.down('sm')]: {
      flex: '1 0 calc(50% - 1rem)'
    },
    [theme.breakpoints.down('xs')]: {
      flex: '1 0 calc(100% - 1rem)'
    }
  },
  image: {
    height: '300px'
  }
}));

const PetCard = props => {
  const classes = styles();
  const photo =
    props.pet.photos.length > 0
      ? props.pet.photos[0].large
      : `https://via.placeholder.com/150`;

  const onPetCardClick = async () => {
    props.history.push(`${ROUTE_URLS.PET}/${props.pet.id}`);
  };

  return (
    <Card className={classes.card} onClick={onPetCardClick}>
      <CardMedia className={classes.image} image={photo} component='img' />
      <CardContent>
        <Grid container justify='space-between' direction='column'>
          <Typography variant='h6'>{props.pet.name}</Typography>
          <Typography>
            {props.pet.age} {props.pet.gender}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PetCard;
