import React from 'react';
import Menu from '../components/Menu';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section6 from '../components/Section6';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Menu />
    <Logo />
    <Main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
    </Main>
  </div>
);

export default App;
