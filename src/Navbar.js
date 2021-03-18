import React, { useContext } from 'react';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import UserContext from './UserContext';
import LoginNavbar from './LoginNavbar';
import LogoutNavbar from './LogoutNavbar';

const NavBar = () => {
    const user = useContext(UserContext);
    return (
      <div>
        <Navbar color='light' light expand='md'>
            <NavbarBrand href='/'>Jobly</NavbarBrand>
          <Nav className="ml-auto" navbar>
            { user && <LoginNavbar />}
            { !user && <LogoutNavbar />}
          </Nav>  
        </Navbar>
        </div>
    )
}

export default NavBar;