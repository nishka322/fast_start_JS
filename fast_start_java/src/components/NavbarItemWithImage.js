import React from 'react';
import Link from '@docusaurus/Link';

const NavbarItemWithImage = () => {
  return (
    <Link className="navbar__item navbar__link" to="/corgisaurus/docs/controll/intro">
      <img src="/img/ups.jfif" alt="Управление" style={{ height: '20px', marginRight: '5px' }} />
      Управление
    </Link>
  );
};

export default NavbarItemWithImage;
