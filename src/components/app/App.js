import React from 'react';
import Dashboard  from '../../pages/dashboard/dashboard.component';
import Login from '../../pages/login/login.component';
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';
import { Route } from 'react-router-dom'
import { FaUser } from 'react-icons/lib/fa';
import './App.css';

class App extends React.PureComponent {
  
  render() {
    return (
      <div>
        <Navbar  className="nav-custom">
          <NavbarBrand className="nav-item--primary" href="/">Dashboard</NavbarBrand>
          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="nav-item--primary" nav caret><FaUser /> Admin</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>View Mode</DropdownItem>
                  <DropdownItem>Edit Mode</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar >
        <main>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
        </main>
      </div>
    );
  }
}

export default App;
