import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';

const Registro = () => {
  const [form, setValues] = useState({
    nombre: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDafault();
    console.log(form);
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='nombre'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='documento'
            className='input'
            type='number'
            placeholder='Cédula'
            onChange={handleInput}
          />
          <input
            name='correo'
            className='input'
            type='tex'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='celular'
            className='input'
            type='number'
            placeholder='Celular'
            onChange={handleInput}
          />
          <input
            name='senioritie'
            className='input'
            type='text'
            placeholder='Senioritie'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='tex'
            placeholder='Equipo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <input
            className='input'
            type='password'
            placeholder='Confirmar contraseña'
          />
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
};
export default Registro;
