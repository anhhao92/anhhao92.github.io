import React from 'react';
import Dashboard from '../../pages/dashboard/dashboard.component';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout.component';
import Login from '../../pages/login/login.component';
import ViewWidget from '../../pages/view/ViewWidget.component';
import Profile from '../../pages/profile/profile.component';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuth } from './Auth';
import { fetchUserInfo } from '../../actions/auth.action';

const DashboardRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={matchProps => (
      <DashboardLayout>
        <Component {...matchProps} />
      </DashboardLayout>
    )}
  />
);

class App extends React.PureComponent {
  componentWillMount() {
    this.props.fetchUserInfo();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <DashboardRoute exact path="/" component={withAuth(Dashboard)} />
          <DashboardRoute
            exact
            path="/view/:id"
            component={withAuth(ViewWidget)}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={withAuth(Profile)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUserInfo }
)(App);
