import React from 'react';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import Section8 from '../components/Section8';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Menu />
    <Logo />
    <Main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 titleRoutes='RUTAS DE CRECIMIENTO' />
      <Section5 titleObjetives='OBJETIVOS' />
      <Section6 titleAvailable='RECOMPENSAS DISPONIBLES' />
      <Section7 titleAcquired='RECOMPENSAS ADQUIRIDAS' />
      <Section8 titleEvents='EVENTOS' />
    </Main>
    <Footer />
  </div>
);

export default App;
