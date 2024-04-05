import React from 'react';

function Drink({ onSelect }) {
  const drinks = [
    { 
      name: 'Gin And Tonic',
      description: 'A classic and refreshing cocktail featuring gin, tonic water, and a splash of citrus, served over ice for a crisp and invigorating drink.',
      image: './image/drinks/gin-and-tonicd0ac6.jpeg'
    },
    { 
      name: 'Orange Juice',
      description: 'Freshly squeezed orange juice.',
      image: './image/drinks/Orange-Juice.jpeg'
    },
    { 
      name: 'Iced Tea',
      description: 'Chilled tea served over ice with a hint of lemon.',
      image: './image/drinks/Peach-iced-tea-197aa60.jpg'
    },
    { 
      name: 'Mango Lassi',
      description: 'Refreshing Indian drink made with ripe mangoes, yogurt, milk, sugar.',
      image: './image/drinks/mango-lassi-recipe-1-1-500x375.jpg'
    },
    { 
      name: 'Water',
      description: 'Plain water.',
      image: './image/drinks/water.jpeg'
    }
  ];

  return (
    <div>
      <h2>What would you like to drink with your meal?</h2>
      {drinks.map((drink, index) => (
        <div key={index}>
          <h3>{drink.name}</h3>
          <img src={drink.image} alt={drink.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p>{drink.description}</p>
          <button onClick={() => onSelect(drink.name)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default Drink;

