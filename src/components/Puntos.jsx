import React from 'react';
import Premios from './Premios';
import '../assets/styles/components/Puntos.scss';

const Puntos = () => (
  <div className='overLay'>
    <div className='popup'>
      <a href='/' id='btn__cerrar' className='btn__cerrar'>
        <i className='fas fa__times' />
      </a>
      <div className='contenedorPuntos'>
        <h2 className='item1'>PUNTOS Y PREMIOS</h2>
        <Premios
          puntos='300 pts'
          descripcion='Cuaderno Personalizado Tech Zinobe'
        />
        <Premios
          puntos='600 pts'
          descripcion='Tulas personalizadas Tech Zinobe'
        />
        <Premios
          puntos='900 pts'
          descripcion='Diseño chaqueta o maleta Zinobe'
        />
        <Premios
          puntos='1200 pts'
          descripcion='Manilla / airdots'
        />
        <Premios
          puntos='1500 pts'
          descripcion='Certificación curso online (montón máximo definido)'
        />
        <Premios
          puntos='1800 pts'
          descripcion='Audífonos'
        />
        <Premios
          puntos='2100 pts'
          descripcion='Invitación cursos presenciales, conferencias o congresos Nacionales'
        />
        <Premios
          puntos='2500 pts'
          descripcion='Play + Juego/viaje para 2 Nacional (sujeto a monto)'
        />
        <h2 className='item2'>EQUIPO</h2>
        <Premios
          className='item3'
          puntos='3000 pts en equipo'
          descripcion='Salida/actividad para el equipo completo'
        />
        <Premios
          className='item4'
          puntos='5000 pts en equipo'
          descripcion='Salida/actividad para el equipo completo'
        />
      </div>
    </div>
  </div>
);

export default Puntos;
