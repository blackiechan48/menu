import React from 'react';

function FoodCard({ name, image, description }) {
  return (

    <div>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px' }}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
    
  );
}

export default FoodCard;
