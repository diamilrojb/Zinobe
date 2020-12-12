import React from 'react';
import '../assets/styles/components/Login.scss';

const Registro = () => (
  <section class='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='password' placeholder='Cédula' />
        <input className='input' type='password' placeholder='Correo' />
        <input className='input' type='password' placeholder='Celular' />
        <input className='input' type='password' placeholder='Senioritie' />
        <input className='input' type='password' placeholder='Equipo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <input className='input' type='password' placeholder='Confirmar contraseña' />
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

export default Registro;