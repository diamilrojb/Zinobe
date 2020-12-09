import React from 'react';
import ItemGam from '../assets/styles/components/ItemGam.scss';

const ItemGam = ({ descriptionGam, valorGam }) => (
  <div>
    <button type='button'> </button>
    <p>
      {descriptionGam}
      <button type='button'>{valorGam}</button>
    </p>
  </div>
);

export default ItemGam;