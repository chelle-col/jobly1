import React, { useContext } from 'react';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import LoginNavbar from './LoginNavbar';
import LogoutNavbar from './LogoutNavbar';

const NavBar = () => {
    const user = useContext(UserContext);
    return (
      <div>
        <Navbar color='light' light expand='md'>
            <NavbarBrand tag={Link} to='/'>Jobly</NavbarBrand>
          <Nav className="ml-auto" navbar>
            { user && <LoginNavbar />}
            { !user && <LogoutNavbar />}
          </Nav>  
        </Navbar>
        </div>
    )
}

export default NavBar;