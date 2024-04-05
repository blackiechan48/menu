// Starter Component
import React from 'react';

function Starters({ onSelect }) {
  const starters = [
    { 
      name: 'Pork Steam Buns',
      description: 'Soft and fluffy steamed buns filled with savory pork filling, served with dipping sauce.',
      image: './image/Starter/Steambuns.png'
    },
    { 
      name: 'Shrimp Cocktail',
      description: 'Chilled shrimp served with tangy cocktail sauce and lemon wedges.',
      image: './image/Starter/Shrimpcoctails.png'
    },
    { 
      name: 'Mango Avocado Salsa',
      description: 'A refreshing salsa made with diced mango, avocado, red onion, cilantro, lime juice, and a pinch of salt. Serve with tortilla chips for a burst of flavor in every bite',
      image: './image/Starter/Mango-Avocado-Salsa.jpg'
    },
    { 
      name: 'Calamari',
      description: 'Crispy fried calamari rings served with marinara sauce and lemon wedges.',
      image: './image/Starter/calamari.png'
    },
    
    { 
      name: 'Spring Rolls',
      description: 'Crispy vegetable spring rolls served with a sweet and sour dipping sauce.',
      image: './image/Starter/springrolls.png'
    }
  ];

  return (
    <div>
      <h2>Choose a Starter</h2>
      {starters.map((starter, index) => (
        <div key={index}>
          <h3>{starter.name}</h3>
          <img src={starter.image} alt={starter.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p>{starter.description}</p>
          <button onClick={() => onSelect(starter.name)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default Starters;
