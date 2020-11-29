import React from 'react';
import '../assets/styles/components/Menu.scss';

const Menu = () => (
  <nav className='nav'>
    <ul className='nav__menu'>
      <li>
        <a className='nav__menu--home' href='//#endregion'>Home</a>
      </li>
      <li className='nav__menu--usuario'>
        <img className='nav__menu--foto' src='../image/Recurso9.png' alt='Foto Usuario' />
        <span>Usuario</span>
      </li>
    </ul>
  </nav>
);

export default Menu;
