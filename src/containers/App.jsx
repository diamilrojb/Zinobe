import React from 'react';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import ContainerSection from '../components/ContainerSection';
import Section6 from '../components/Section6';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';


const App = () => (
  <div className='App'>
    <Menu />
    <Logo />
    <Main>
      <Section1 />
      <Section2 />
      <Section3 titleGraficos='GRAFICOS DESEMPEÑO' />
      <Section4 titleRoutes='RUTAS DE CRECIMIENTO' />
      <Section4 titleRoutes='OBJETIVOS' />
      <ContainerSection>
        <Section3 titleItem='RECOMPENSAS DISPONIBLES' />
        <Section4 titleItem='RECOMPENSAS ADQUIRIDAS' />
        <Section6 titleItem='EVENTOS' />
      </ContainerSection>
    </Main>
    <Footer />
  </div>
);

export default App;
