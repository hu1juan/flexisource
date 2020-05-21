import React, { useState } from 'react';
import NavLinks from '../header/NavLinks';
import logo from '../../assets/adrenalin.svg';
import './footer.scss';
import { MenuOutlined } from '@ant-design/icons';

const MainFooter = () => {
  const menus = ['Privacy', 'Sitemap', 'Facebook', 'LinkedIn', 'Instagram', 'Twitter'];
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="foot-container">
      <img src={logo} alt='FlexiSource IT' />
      <MenuOutlined onClick={() => setShowMenu(!showMenu)} />
      {
        showMenu ? < NavLinks menus={menus} /> : null
      }
    </div>
  );
}

export default MainFooter;