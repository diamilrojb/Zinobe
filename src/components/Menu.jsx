import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Menu.scss';
import fotoUsuario from '../assets/static/Recurso9.png';

const Menu = () => (
  <nav className='nav'>
    <ul className='nav__menu'>
      <li className='nav__menu--usuario'>
        <img className='nav__menu--foto' src={fotoUsuario} alt='Foto Usuario' />
        <span>Usuario</span>
      </li>
      <Link to='/'>
        <li>
          <a className='nav__menu--home' href='/'>Cerrar Sesión</a>
        </li>
      </Link>
    </ul>
  </nav>
);

export default Menu;
