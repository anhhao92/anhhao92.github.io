import React from 'react';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { FaDashboard } from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import { DashboardActionCreator } from '../../../actions/dashboard.action';
import { firebase } from '../../../configs/firebase';

class Header extends React.PureComponent {
  onClickView = () => {
    const { dispatch } = this.props;
    dispatch(DashboardActionCreator.switchMode(false));
  };

  // onSave = () => {
  //   const { dispatch, dashboard } = this.props;
  //   dispatch(saveDashboard(dashboard));
  // };

  onClickEdit = () => {
    const { dispatch } = this.props;
    dispatch(DashboardActionCreator.switchMode(true));
  };

  onLogout = () => {
    const { history, dispatch } = this.props;
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: 'LOGOUT_REQUEST'
        });
        history.push('/login');
      });
  };

  render() {
    const user = this.props.user;
    return (
      <Navbar>
        <Link className="navbar-brand" to="/">
          <FaDashboard style={{ verticalAlign: 'text-top' }} /> Dashboard
        </Link>
        <Nav navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav caret>
              {user && (
                <img className="user-avatar" src={user.photoURL} alt="avatar" />
              )}
              {user && user.displayName}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem
                disabled={!this.props.isEdit}
                onClick={this.onClickView}
              >
                Switch to View
              </DropdownItem>
              <DropdownItem
                disabled={this.props.isEdit}
                onClick={this.onClickEdit}
              >
                Switch to Edit
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.onLogout}>Log out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  isEdit: state.dashboard.isEdit,
  dashboard: state.dashboard,
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(Header));
