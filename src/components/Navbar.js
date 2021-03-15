import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink className='nav__link' to='/'>
        Home
      </NavLink>
      <NavLink className='nav__link' to='/login'>
        Log in
      </NavLink>
      <NavLink className='nav__link' to='/signup'>
        Sign Up
      </NavLink>
    </nav>
  );
};

export default Navbar;
