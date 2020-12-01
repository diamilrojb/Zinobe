import React from 'react';
//import '../assets/styles/components/Section1.scss';

const Section1 = () => (
  <section className='main-section1'>
    <div className='main-section1__user--img' />
    <div className='main-section1__user--data'>
      <p>Nombre: </p>
      <p>Rol: </p>
      <p>Equipo: </p>
    </div>
    <div className='main-section1__user--gamification'>
      <p>PUNTOS DISPONIBLES </p>
      <p>PUNTOS GASTADOS </p>
    </div>
  </section>
);

export default Section1;
