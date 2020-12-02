import React from 'react';
import '../assets/styles/components/Section1.scss';
import foto from '../assets/static/Recurso9.png';

const Section1 = () => (
  <section className='main-section1'>
    <div>
      <img className='main-section1__user--img' src={foto} alt='Foto' />
    </div>
    <div className='main-section1__user'>
      <div className='main-section1__user--data'>
        <p>Nombre: </p>
        <p>Rol: </p>
        <p>Equipo: </p>
      </div>
      <div className='main-section1__user--gamification'>
        <p>PUNTOS DISPONIBLES </p>
      </div>
      <div className='main-section1__user--gamification'>
        <p>PUNTOS GASTADOS </p>
      </div>
    </div>
  </section>
);

export default Section1;
