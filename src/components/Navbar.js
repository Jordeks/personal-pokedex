import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/login'>Log in</NavLink>
    </nav>
  );
};

export default Navbar;
