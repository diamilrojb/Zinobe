import React from 'react';
import '../assets/styles/components/EquipoSec1.scss';
import foto from '../assets/static/Recurso9.png';
import canjear from '../assets/static/Recurso16.png';

const EquipoSec1 = () => (
  <section className='main-equipoSec1'>
    <div>
      <img className='main-equipoSec1__user--img' src={foto} alt='Foto' />
    </div>
    <div className='main-equipoSec1__user'>
      <div className='main-equipoSec1__user--data'>
        <p>EQUIPO </p>
      </div>
      <div className='main-equipoSec1__user--gamification'>
        <p>PUNTOS DISPONIBLES </p>
      </div>
      <div className='main-equipoSec1__user--gamification'>
        <p>PUNTOS GASTADOS </p>
      </div>
      <a href='//#endregion'>
        <img className='.main-equipoSec1__canjear' src={canjear} alt='Canjear Puntos' />
      </a>
    </div>
  </section>
);

export default EquipoSec1;
