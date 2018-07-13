import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export const withAuth = WrappedComponent => {
  class Authentication extends React.PureComponent {
    componentWillUpdate(nextProps) {
      const { history } = this.props;
      if (!nextProps.isAuthenticated) {
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
  return withRouter(connect(mapStateToProps)(Authentication));
};
