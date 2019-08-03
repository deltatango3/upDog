import React from 'react';
import { makeStyles } from '@material-ui/styles';

const bgColor = '#FFCA3A';

const styles = makeStyles({
  '@keyframes loading': {
    '0%': {
      backgroundColor: bgColor,
      boxShadow: `40px 0px 0px 0px ${bgColor}20, 80px 0px 0px 0px ${bgColor}20`
    },
    '25%': {
      backgroundColor: `${bgColor}40`,
      boxShadow: `40px 0px 0px 0px ${bgColor}99, 80px 0px 0px 0px ${bgColor}20`
    },
    '75%': {
      backgroundColor: `${bgColor}40`,
      boxShadow: `40px 0px 0px 0px ${bgColor}20, 80px 0px 0px 0px ${bgColor}`
    }
  },
  loaderContainer: {
    width: '100%',
    borderRadius: '1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 0'
  },
  loader: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    animation: '$loading 500ms linear infinite alternate',
    position: 'relative',
    left: '-40px'
  }
});

const Loading = () => {
  const classes = styles();

  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loader} />
    </div>
  );
};

export default Loading;
