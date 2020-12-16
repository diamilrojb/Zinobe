import React from 'react';
import '../assets/styles/components/Logo.scss';
import logotipo from '../assets/static/Recurso12.png';

const Logo = () => (
  <section className='section-logo'>
    <a href='//#endregion'>
      <img src={logotipo} alt='Logo Zinobe' />
    </a>
  </section>
);

export default Logo;
