import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import ContainerSection from '../components/ContainerSection';
import Section6 from '../components/Section6';
import EquipoSec1 from '../components/EquipoSec1';
import Footer from '../components/Footer';
import '../assets/styles/Usuario.scss';
import useInitialState from '../hooks/useInitialState';

const Usuario = () => {

  // const [tercero , setTercero ] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/terceros?id=5fbf0439213f92049f2a47b2', {
  //     'mode': 'cors',
  //     'headers': {
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'GET ',
  //     }
  // })
  //     .then(response => response.json())
  //     .then(data => setTercero(data));
    
  // },[]);

  const API = 'http://localhost:3000/terceros?id=5fbf0439213f92049f2a47b2'
  const API2 = 'http://localhost:3000/puntosredimir'

  const initialState = useInitialState(API);
  const initialState2 = useInitialState(API2);
   return initialState.length === 0 || initialState2.length === 0 ? <h1>Loading...</h1> : (
    // console.log(initialState),
    console.log(initialState2.body[0]),

    // console.log(initialState.body[0]._id),

    <div className='Usuario'>
      <Menu />
    <Logo />
      <Main>
        <Section1 key={initialState.body[0]._id} {...initialState.body[0]} {...initialState2.body[0]}  />
        <Section3 titleGraficos='GRAFICOS DESEMPEÑO' />
        <Section2 />
        <Section4 titleRoutes='RUTAS DE CRECIMIENTO' />
        <Section4 titleRoutes='OBJETIVOS' />
        <ContainerSection>
          <Section6 titleItem='RECOMPENSAS DISPONIBLES' />
          <Section6 titleItem='RECOMPENSAS ADQUIRIDAS' />
          <Section6 titleItem='EVENTOS' />
        </ContainerSection>
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
      <Footer />
    </div>
  );
};

export default Usuario;
