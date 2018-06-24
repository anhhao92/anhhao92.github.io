import React from 'react';
import Dashboard  from '../../pages/dashboard/dashboard.component';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout.component';
import Login from '../../pages/login/login.component';
import ViewWidget from '../../pages/view/ViewWidget.component';
import { Route, Switch } from 'react-router-dom'

const DashboardRoute = ({component: Component, ...props}) => (
  <Route {...props} render={matchProps => (
    <DashboardLayout>
        <Component {...matchProps} />
    </DashboardLayout>
  )} />
)

export default () => (
  <Switch>
    <DashboardRoute exact path="/" component={Dashboard} />
    <DashboardRoute exact path="/view/:id" component={ViewWidget} />
    <Route exact path="/login" component={Login} />
  </Switch>
)
