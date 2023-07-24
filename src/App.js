import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
// Layouts & Route
import routes from './routes';
import PublicLayout from './Layouts/PublicLayout';
import AuthLayout from './Layouts/AuthLayout';
import NoLayout from './Layouts/NoLayout';

// Public pages
import LoginPage from './Pages/LoginPage';
import ChangePwd from './Pages/ChangePwd';
import HomePage from './Pages/HomePage';

// Authenticated pages
import DashboardPage from './Pages/DashboardPage';

import NotFoundPage from './Pages/NotFoundPage';
import EditPage from './Pages/EditPage';

const pages = [
  // Authenticated pages
  {
    exact: true,
    path: routes.dashboard,
    component: DashboardPage,
    layout: AuthLayout,
  },
  {
    exact: true,
    path: routes.changePwd,
    component: ChangePwd,
    layout: AuthLayout,
  },
  {
    exact: true,
    path: routes.dashboardEdit,
    component: EditPage,
    layout: PublicLayout,
  },
  // Public pages
  // {
  //   exact: true,
  //   path: routes.uploadFile,
  //   component: UploadFilesPage,
  //   layout: PublicLayout,
  // },
  {
    exact: true,
    path: routes.login,
    component: LoginPage,
    layout: NoLayout,
  },
  {
    exact: true,
    path: routes.home,
    component: HomePage,
    layout: PublicLayout,
  },
];

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {pages.map(
          ({ exact, path, component: Component, layout: Layout }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={(props) => (
                <Layout history={props.history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          ),
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
