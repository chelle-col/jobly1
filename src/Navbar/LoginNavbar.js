import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginNavbar = ({ signout }) => {
  const handleCLick = () => {
    signout();
  }
    return (
        <>
            <NavItem>
              <NavLink tag={Link} to='/jobs'>Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/companies'>Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/profile'>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#' onClick={handleCLick} >Logout</NavLink>
            </NavItem>
        </>
    )
}

export default LoginNavbar;