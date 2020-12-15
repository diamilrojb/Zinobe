import React from 'react';
//import { Link } from 'react-router-dom';
import '../assets/styles/components/Section2.scss';
import canjear from '../assets/static/Recurso16.png';
import cargar from '../assets/static/Recurso17.png';

const Section2 = ({ titlePuntos, valorPuntos, descripcion }) => (
  <section className='main-section2'>
    <a href='/Puntos'>
      <img className='main-section2__canjear' src={canjear} alt='Canjear Puntos' />
    </a>
    <a href='/Gamification'>
      <img className='main-section2__cargar' src={cargar} alt='Cargar Soportes' />
    </a>
  </section>
);

export default Section2;
