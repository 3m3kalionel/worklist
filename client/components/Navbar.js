import React from 'react';

import NavbarStyles from '../styles/Navbar';
import Logout from '../components/Logout';

const Navbar = () => (
  <NavbarStyles>
    <div id="navbar-container">
      <ul>
        <li id="app-logo">Worklist</li>
        <li><Logout /></li>
      </ul>
    </div>
  </NavbarStyles>
);

export default Navbar;
