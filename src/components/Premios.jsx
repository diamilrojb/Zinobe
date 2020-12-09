import React from 'react';
import '../assets/styles/components/Premios.scss';

const PuntosUsuario = ({ puntos, descripcion }) => (
  <button type='button' className='button__puntos'>
    <p>{puntos}</p>
    <p>{descripcion}</p>
  </button>
);

export default PuntosUsuario;
