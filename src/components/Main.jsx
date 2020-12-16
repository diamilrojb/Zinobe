import React from 'react';
import '../assets/styles/components/Main.scss';

const Main = ({ children }) => (
  <main className='main'>
    <div className='main-img'>
      {children}
    </div>
  </main>
);

export default Main;
