import React from 'react';
import Dashboard  from '../../pages/dashboard/dashboard.component';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout.component'
import Login from '../../pages/login/login.component'
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
    <Route exact path="/login" component={Login} />
  </Switch>
)
