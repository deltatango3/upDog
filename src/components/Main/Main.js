import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchRandomDogs } from '../../actions/actionCreators';
import { getAccessToken } from '../../reducers/rootReducer';

const Main = props => {
  useEffect(() => {
    if (props.token) {
      props.fetchRandomDogs();
    }
  }, [props.token]);

  return (
    <Fragment>
      <h1>Main Page</h1>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  token: getAccessToken(state)
});

export default connect(
  mapStateToProps,
  { fetchRandomDogs }
)(Main);
