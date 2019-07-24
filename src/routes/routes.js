import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router';
import ROUTE_URLS from './routeUrls';
import Main from '../components/Main/Main';
import Pet from '../components/Pet/Pet';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTE_URLS.HOME} render={props => <Main {...props} />} />
    <Route exact path={ROUTE_URLS.PET} render={() => <Pet />} />
    <Redirect from='/' to={ROUTE_URLS.HOME} />
  </Switch>
);

export default withRouter(Routes);
