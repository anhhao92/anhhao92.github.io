import React from 'react'
import { Navbar, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FaUser } from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { DashboardActionCreator } from '../../../actions/dashboard.action';

const Header = ({isEdit, onClickView, onClickEdit}) => (
    <Navbar>
        <NavbarBrand href="/">Dashboard</NavbarBrand>
        <Nav navbar>
            <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                    <FaUser style={{verticalAlign: 'text-top'}}/> Admin
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem disabled={!isEdit} onClick={onClickView}>Switch to View</DropdownItem>
                    <DropdownItem disabled={isEdit} onClick={onClickEdit}>Switch to Edit</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Log out</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    </Navbar >
)


const mapStateToProps = state => ({
    isEdit: state.dashboard.isEdit
})

const mapDispatchToProps = (dispatch, state) => ({
    onClickView: () => dispatch(DashboardActionCreator.switchMode(false)),
    onClickEdit: () => dispatch(DashboardActionCreator.switchMode(true))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)