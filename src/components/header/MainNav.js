import React from 'react';
import NavLinks from './NavLinks';
import logo from '../../assets/adrenalin.svg';
import './header.scss';

const MainNav = () => {
  const menus = ['Culture', 'Work', 'Clients', 'Services', 'Careers', 'Contact'];

  return (
    <div className="nav-container">
      <img src={logo} alt='FlexiSource IT' />
      <NavLinks menus={menus} />
    </div>
  );
}

export default MainNav;