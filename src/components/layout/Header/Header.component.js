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
import { DashboardActionCreator } from '../../../actions/dashboard.action';
import { Authentication } from '../../../actions/auth.action';

const Header = ({ isEdit, onClickView, onClickEdit, onLogout, history }) => {
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
            <DropdownItem disabled={!isEdit} onClick={onClickView}>
              Switch to View
            </DropdownItem>
            <DropdownItem disabled={isEdit} onClick={onClickEdit}>
              Switch to Edit
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => onLogout(history)}>
              Log out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  isEdit: state.dashboard.isEdit
});

const mapDispatchToProps = dispatch => ({
  onClickView: () => dispatch(DashboardActionCreator.switchMode(false)),
  onClickEdit: () => dispatch(DashboardActionCreator.switchMode(true)),
  onLogout: history => {
    dispatch(Authentication.logoutUser());
    history.push('/login');
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
