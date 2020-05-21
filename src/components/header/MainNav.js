import React, { useState } from 'react';
import NavLinks from './NavLinks';
import logo from '../../assets/adrenalin.svg';
import './header.scss';
import { MenuOutlined } from '@ant-design/icons';
const MainNav = () => {
  const menus = ['Culture', 'Work', 'Clients', 'Services', 'Careers', 'Contact'];
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="nav-container">
      <img src={logo} alt='FlexiSource IT' />
      <MenuOutlined onClick={() => setShowMenu(!showMenu)} />
      {
        showMenu ? < NavLinks menus={menus} /> : null
      }
    </div>
  );
}

export default MainNav;