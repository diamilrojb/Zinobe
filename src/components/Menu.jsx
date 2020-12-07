import React from 'react';
import '../assets/styles/components/Menu.scss';
import fotoUsuario from '../assets/static/Recurso9.png';

const Menu = () => (
  <nav className='nav'>
    <ul className='nav__menu'>
      <li>
        <a className='nav__menu--home' href='//#endregion'>Home</a>
      </li>
      <li className='nav__menu--usuario'>
        <img className='nav__menu--foto' src={fotoUsuario} alt='Foto Usuario' />
        <span>Usuario</span>
      </li>
      <li>
        <a className='nav__menu--home' href='//#endregion'>Cerrar Sesión</a>
      </li>
    </ul>
  </nav>
);

export default Menu;
