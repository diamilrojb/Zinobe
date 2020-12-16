import React from 'react';
import '../assets/styles/components/ItemGam.scss';

const ItemGam = ({ descriptionGam, valorGam }) => (
  <div>
    <button type='button' className='buttonGam'>
      {valorGam}
      {descriptionGam}
    </button>
  </div>
);

export default ItemGam;
