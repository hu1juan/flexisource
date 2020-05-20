import React from 'react';
import NavLinks from '../header/NavLinks';
import logo from '../../assets/adrenalin.svg';
import './footer.scss';

const MainFooter = () => {
  const menus = ['Privacy', 'Sitemap', 'Facebook', 'LinkedIn', 'Instagram', 'Twitter'];

  return (
    <div className="foot-container">
      <img src={logo} alt='FlexiSource IT' />
      <NavLinks menus={menus} />
    </div>
  );
}

export default MainFooter;