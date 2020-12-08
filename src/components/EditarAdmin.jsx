import React from 'react';
import 

const AdminUsuario = ({ modUsuario }) => (
  <section className='section-logo'>
    <a href='//#endregion'>
      <img src={logotipo} alt='Logo Zinobe' />
    </a>
    <div>
      <button type='button'>{modUsuario}</button>
    </div>
  </section>
);

export default AdminUsuario;
