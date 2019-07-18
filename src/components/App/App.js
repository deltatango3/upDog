import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAccessToken } from '../../actions/actionCreators';
import Main from '../Main/Main';

const App = props => {
  useEffect(() => {
    props.fetchAccessToken();
  }, []);

  return (
    <Fragment>
      <Main />
    </Fragment>
  );
};

export default connect(
  undefined,
  { fetchAccessToken }
)(App);
