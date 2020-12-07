import React from 'react';
//import '../assets/styles/components/Logo.scss';
//import logotipo from '../assets/static/Recurso12.png';

const LogoAdmin = ({ modUsuario }) => (
  <section className='section-logo'>
    <a href='//#endregion'>
      <img src={logotipo} alt='Logo Zinobe' />
    </a>
    <div>
      <button type='button'>{modUsuario}</button>
    </div>
  </section>
);

export default LogoAdmin;
