import React, {useState, useEffect} from 'react';
//import Menu from '../components/Menu';
//import Logo from '../components/Logo';
//import Main from '../components/Main';
//import Section1 from '../components/Section1';
//import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import ContainerSection from '../components/ContainerSection';
import Section6 from '../components/Section6';
import EquipoSec1 from '../components/EquipoSec1';
//import Footer from '../components/Footer';
import '../assets/styles/Usuario.scss';
// import useInitialState from '../hooks/useInitialState';

const Grupo = () => {


  // const API = 'http://localhost:3000/terceros?id=5fbf0439213f92049f2a47b2'
  // const API2 = 'http://localhost:3000/puntosredimir'

  // const initialState = useInitialState(API);
  // const initialState2 = useInitialState(API2);
   return (
 
    // console.log(initialState2.body[0]),

    // console.log(initialState.body[0]._id),

    <div className='Usuario'>
  
      <Main>

        <EquipoSec1 />
        <Section3 titleGraficos='GRAFICOS DESEMPEÑO' />
        <Section4 titleRoutes='INTEGRANTES EQUIPO' />
        <Section4 titleRoutes='OBJETIVOS' />
        <ContainerSection>
          <Section6 titleItem='RECOMPENSAS DISPONIBLES' />
          <Section6 titleItem='RECOMPENSAS ADQUIRIDAS' />
          <Section6 titleItem='EVENTOS' />
        </ContainerSection>
      </Main>
    
    </div>
  );
};

export default Grupo;