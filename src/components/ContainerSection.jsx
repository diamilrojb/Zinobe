import React from 'react';
import '../assets/styles/components/ContainerSection.scss';

const ContainerSection = ({ Children }) => (
  <section className='container-section'>
    {Children}
  </section>
);

export default ContainerSection;
