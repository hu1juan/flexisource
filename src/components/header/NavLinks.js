import React from 'react';

const NavLinks = (props) => {
  const { menus } = props;
  const links = menus.map((el, ind) => <span key={ind}>{el}</span>)
  return (
    <div className='header-links'>
      {links}
    </div>
  );
}

export default NavLinks;