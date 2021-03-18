import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

const LogoutNavbar = () => {
    return (
        <>
            <NavItem>
              <NavLink href='/login'>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/signup'>Sign Up</NavLink>
            </NavItem>
        </>
    )
}

export default LogoutNavbar;