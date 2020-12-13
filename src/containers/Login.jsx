import React from 'react';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>
          Iniciar sesión
        </button>
        <div className='login__container--remember-me'>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <a href='/'> Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;
