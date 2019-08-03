import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/styles';
import theme from '../../styles/globalStyles';
import { fetchAccessToken } from '../../actions/actionCreators';
import Routes from '../../routes/routes';

const styles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const App = () => {
  const classes = styles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccessToken());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default withRouter(App);
