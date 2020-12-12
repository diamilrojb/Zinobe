import React from 'react';
import '../assets/styles/components/BtnAdm.scss';

const BtnAdm = ({ titleBtnAdm }) => (
  <button className='button__adm' type='button'>
    {titleBtnAdm}
  </button>
);

export default BtnAdm;
