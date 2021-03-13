import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

const NavBar = () => {
    return (
      <div>
        <Navbar color='light' light expand='md'>
            <NavbarBrand href='/'>Jobly</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href='/jobs'>Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/companies'>Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/profile'>Profile</NavLink>
            </NavItem>
          </Nav>  
        </Navbar>
        </div>
    )
}

export default NavBar;