import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

const LoginNavbar = () => {
    return (
        <>
            <NavItem>
              <NavLink href='/jobs'>Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/companies'>Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/profile'>Profile</NavLink>
            </NavItem>
        </>
    )
}

export default LoginNavbar;