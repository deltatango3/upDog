import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ROUTE_URLS from './routeUrls';
import Main from '../components/Main/Main';
import Pet from '../components/Pet/Pet';

const Routes = () => (
  <Switch>
    <Route exact path={`/`} render={props => <Main {...props} />} />
    <Route path={`${ROUTE_URLS.PET}`} render={props => <Pet {...props} />} />
  </Switch>
);

export default withRouter(Routes);
