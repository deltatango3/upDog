import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles/globalStyles';
import { fetchAccessToken } from '../../actions/actionCreators';
import Main from '../Main/Main';

const styles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const App = props => {
  const classes = styles();

  useEffect(() => {
    props.fetchAccessToken();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default connect(
  undefined,
  { fetchAccessToken }
)(App);
