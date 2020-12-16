import React from 'react';
import '../assets/styles/components/ItemChallenge.scss';

const ItemChallenge = ({ descriptionGam, valorGam }) => (
  <div>
    <button type='button' className='buttonChallenge'>
      {valorGam}
      {descriptionGam}
    </button>
  </div>
);

export default ItemChallenge;