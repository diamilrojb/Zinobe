import React from 'react';
import ItemGam from './ItemGam';
import '../assets/styles/components/Gamification.scss';

const Gamification = () => (
  <div className='overLay'>
    <div className='popup'>
      <a href='/' id='btn__cerrar' className='btn__cerrar'>
        <i className='fas fa__times' />
      </a>
      <div className='contenedorGamification'>
        <h2>APRENDER</h2>
        <ItemGam valorGam='50 pts' descriptionGam='-Autodesarrollo: Mooc´s, cerfificados, postgrados.-Cerficaciones cursos técnicos que contribuyan en el desarrollo de proyectos. ' />
        <ItemGam
          valorGam='15 pts'
          descriptionGam='Asistir a las charlas, talleres u otras actividades formativas'
        />
        <h2>CONTRIBUIR</h2>
        <ItemGam valorGam='50 pts' descriptionGam='-Autodesarrollo: Mooc´s, cerfificados, postgrados.-Cerficaciones cursos técnicos que contribuyan en el desarrollo de proyectos. ' />
        <ItemGam
          valorGam='15 pts'
          descriptionGam='Asistir a las charlas, talleres u otras actividades formativas'
        />
        <h2>HACER</h2>
        <ItemGam valorGam='50 pts' descriptionGam='-Autodesarrollo: Mooc´s, cerfificados, postgrados.-Cerficaciones cursos técnicos que contribuyan en el desarrollo de proyectos. ' />
        <ItemGam
          valorGam='15 pts'
          descriptionGam='Asistir a las charlas, talleres u otras actividades formativas'
        />
      </div>
    </div>
  </div>
);

export default Gamification;
