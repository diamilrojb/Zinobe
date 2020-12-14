import React from 'react';
import '../assets/styles/components/Section1.scss';
import foto from '../assets/static/Recurso9.png';

const Section1 = ( { _id, Nombre, Apellido, Telefono, Cedula, Cargo, Estado, Id_estado,Puntos_disponibles, Puntos_redimidos } ) => (



  console.log( _id, Nombre, Apellido, Telefono, Cedula, Cargo, Estado, Id_estado, Puntos_disponibles, Puntos_redimidos),
  <section className='main-section1'>
    <div>
      <img className='main-section1__user--img' src={foto} alt='Foto' />
    </div>
    <div className='main-section1__user'>
      <div className='main-section1__user--data'>
        <p>Nombre: {Nombre+ " " + Apellido} </p>
        <p>Rol:  { Cargo }  </p>
        <p>Equipo: </p>
      </div>
      <div className='main-section1__user--gamification'>
      
        <p>PUNTOS DISPONIBLES </p>
        <p>{ Puntos_disponibles}</p>
      </div>
      <div className='main-section1__user--gamification'>
    
        <p>PUNTOS REDIMIDOS </p>
        <p>{ Puntos_redimidos}</p>
      </div>
    </div>
  </section>
);

export default Section1;