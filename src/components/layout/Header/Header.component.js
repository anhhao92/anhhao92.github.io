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
import { FaUser, FaDashboard } from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import {
  DashboardActionCreator,
  saveDashboard
} from '../../../actions/dashboard.action';
import { Authentication } from '../../../actions/auth.action';

class Header extends React.PureComponent {
  onClickView = () => {
    const { dispatch } = this.props;
    dispatch(DashboardActionCreator.switchMode(false));
  };

  onSave = () => {
    const { dispatch, dashboard } = this.props;
    dispatch(saveDashboard(dashboard));
  };

  onClickEdit = () => {
    const { dispatch } = this.props;
    dispatch(DashboardActionCreator.switchMode(true));
  };

  onLogout = () => {
    const { dispatch, history } = this.props;
    history.push('/login');
    dispatch(Authentication.logoutUser());
  };

  render() {
    return (
      <Navbar>
        <Link className="navbar-brand" to="/">
          <FaDashboard style={{ verticalAlign: 'text-top' }} /> Dashboard
        </Link>
        <Nav navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle nav caret>
              <FaUser style={{ verticalAlign: 'text-top' }} /> Admin
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem disabled={this.props.isEdit} onClick={this.onSave}>
                Save Dashboard
              </DropdownItem>
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
  dashboard: state.dashboard
});

export default withRouter(connect(mapStateToProps)(Header));
