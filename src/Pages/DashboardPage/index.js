import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithProps from '../../routes/RouteWithProps';
import routes from '../../routes';

import Dashboard from '../../components/Dashboard';

const DashboardPage = () => {
  return (
    <Switch>
      <RouteWithProps exact path={routes.dashboard} component={Dashboard} />
    </Switch>
  );
};

export default DashboardPage;