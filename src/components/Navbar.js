import React from 'react';
// import { NavLink } from 'react-router-dom';
import navbarStyles from '../styles/navbar.module.css';

const Navbar = () => (
  <div className={navbarStyles.topnav}>
    <div>
      <a className={navbarStyles['brand-logo']} href="/home">Math Magicians</a>
    </div>
    <div className={navbarStyles['navbar-nav']}>
      <a href="/">Home</a>
      <a href="/calculator">Calculator</a>
      <a href="/quotes">Quote</a>
    </div>

  </div>
);

export default Navbar;
