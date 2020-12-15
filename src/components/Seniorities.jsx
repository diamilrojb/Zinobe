import React from 'react';
import '../assets/styles/components/Login.scss';

const Seniorities = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Seniorities</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Slug' />
        <input className='input' type='text' placeholder='Descripción' />
        <input className='input' type='text' placeholder='Integrantes' />
        <button className='button' type='button'>
          Crear
        </button>
        <button className='button' type='button'>
          Guardar
        </button>
        <button className='button' type='button'>
          Eliminar
        </button>
      </form>
    </section>
  </section>
);

export default Seniorities;