import React from 'react';
import '../assets/styles/components/Main.scss';
//import fondo from '../assets/static/Recurso26.png';

const Main = ({ children }) => (
  <main className='main'>
    <div className='main-img'>
      {children}
    </div>
  </main>
);

export default Main;
