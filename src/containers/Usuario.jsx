import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import ContainerSection from '../components/ContainerSection';
import Section6 from '../components/Section6';
import EquipoSec1 from '../components/EquipoSec1';
// import Footer from '../components/Footer';
import '../assets/styles/Usuario.scss';

const Usuario = () => {
  return (
    <>
      <Section1 />
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
    </>
  );
};

export default Usuario;
