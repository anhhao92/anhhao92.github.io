import React from 'react';
import Dashboard from '../../pages/dashboard/dashboard.component';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout.component';
import Login from '../../pages/login/login.component';
import ViewWidget from '../../pages/view/ViewWidget.component';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const DashboardRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={matchProps =>
      !props.isAuthenticated ? (
        <Redirect to="/login" />
      ) : (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )
    }
  />
);

const App = ({ auth }) => {
  return (
    <BrowserRouter>
      <Switch>
        <DashboardRoute exact path="/" component={Dashboard} {...auth} />
        <DashboardRoute
          exact
          path="/view/:id"
          component={ViewWidget}
          {...auth}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
