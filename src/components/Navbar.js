import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import navbarStyles from '../styles/navbar.module.css';

const Navbar = () => (
  <div className={navbarStyles.topnav}>
    <div>
      <NavLink className={navbarStyles['brand-logo']} to="/home">Math Magicians</NavLink>
    </div>
    <div className={navbarStyles['navbar-nav']}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/quotes">Quote</NavLink>
    </div>

  </div>
);

export default Navbar;
