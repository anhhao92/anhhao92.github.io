import React from 'react';
import AsyncComponent from '../AsyncComponent/async.component';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuth } from './Auth';
import { fetchUserInfo } from '../../actions/auth.action';

const AsyncLogin = AsyncComponent(() =>
  import('../../pages/login/login.component')
);
const AsyncProfile = AsyncComponent(() =>
  import('../../pages/profile/profile.component')
);
const AsyncNotFound = AsyncComponent(() =>
  import('../../pages/notfound/notfound.component')
);
const AsyncViewWidget = AsyncComponent(() =>
  import('../../pages/view/ViewWidget.component')
);
const AsyncDashboard = AsyncComponent(() =>
  import('../../pages/dashboard/dashboard.component')
);
const AsyncDashboardLayout = AsyncComponent(() =>
  import('../Layout/DashboardLayout/DashboardLayout.component')
);

const AsyncIncomeConversion = AsyncComponent(() =>
  import('../../pages/tools/IncomeConversion.component')
);

const DashboardRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={matchProps => (
      <AsyncDashboardLayout>
        <Component {...matchProps} />
      </AsyncDashboardLayout>
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
          <DashboardRoute exact path="/" component={withAuth(AsyncDashboard)} />
          <DashboardRoute
            exact
            path="/view/:id"
            component={withAuth(AsyncViewWidget)}
          />
          <Route exact path="/login" component={AsyncLogin} />
          <Route exact path="/tools" component={AsyncIncomeConversion} />
          <Route exact path="/profile" component={withAuth(AsyncProfile)} />
          <Route component={AsyncNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUserInfo }
)(App);
