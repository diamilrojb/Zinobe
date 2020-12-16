import React from 'react';
import ItemGam from './ItemGam';
import ItemChallenge from './ItemChallenge';
import '../assets/styles/components/Gamification.scss';

const Gamification = () => (
  <div className='overLay'>
    <div className='popup'>
      <a href='/' id='btn__cerrar' className='btn__cerrar'>
        <i className='fas fa__times' />
      </a>
      <div className='contenedorItem'>
        <h2>APRENDER</h2>
        <h2>CONTRIBUIR</h2>
        <h2>HACER</h2>
        <ItemGam
          valorGam='50 pts'
          descriptionGam='-Autodesarrollo: Mooc´s, cerfificados, postgrados.
          -Cerficaciones cursos técnicos que contribuyan en el desarrollo de proyectos.'
        />
        <ItemGam
          valorGam='100 pts'
          descriptionGam='-Asistir a las charlas, talleres u otras actividades formativas'
        />
        <ItemGam
          valorGam='150 pts'
          descriptionGam='-Autodesarrollo: Mooc´s, cerfificados, postgrados.-Cerficaciones cursos técnicos que contribuyan en el desarrollo de proyectos.'
        />
        <ItemGam
          valorGam='15 pts'
          descriptionGam='-Asistir a las charlas, talleres u otras actividades formativas'
        />
        <ItemGam
          valorGam='120 pts'
          descriptionGam='-Autodesarrollo: Mooc´s, cerfificados, postgrados.-Cerficaciones cursos técnicos que contribuyan en el desarrollo de proyectos.'
        />
        <div className='item6'>
          <span className='challenge'>Challenges</span>
          <ItemChallenge
            valorGam='400 pts'
            descriptionGam='-Primer puesto'
          />
          <ItemChallenge
            valorGam='300 pts'
            descriptionGam='-Segundo puesto'
          />
          <ItemChallenge
            valorGam='200 pts'
            descriptionGam='-Tercer puesto'
          />
        </div>
      </div>
    </div>
  </div>
);

export default Gamification;
