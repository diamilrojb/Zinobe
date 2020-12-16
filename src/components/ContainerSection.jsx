import React from 'react';
import '../assets/styles/components/ContainerSection.scss';

const ContainerSection = ({ children }) => (
  <section className='container-section'>
    {children}
  </section>
);

export default ContainerSection;
