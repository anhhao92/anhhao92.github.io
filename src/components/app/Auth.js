import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Authentication } from '../../actions/auth.action';
export const withAuth = WrappedComponent => {
  class AuthenticationHook extends React.PureComponent {
    componentWillUpdate(nextProps) {
      const { history, location, dispatch } = this.props;
      if (!nextProps.isAuthenticated) {
        dispatch(Authentication.returnUrl(location.pathname));
        history.push('/login');
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      }
      return <div className="lds-hourglass" />;
    }
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  return withRouter(connect(mapStateToProps)(AuthenticationHook));
};
