// MainMenu Component
import React from 'react';

function MainMenu({ onSelect }) {
  const mainMenu = [
    { 
      name: 'Lemon Garlic Butter Salmon',
      description: 'Tender salmon fillets seasoned with garlic, lemon juice, and herbs, then pan-seared until golden brown.  Served with roasted vegetables or a side salad for a healthy and flavorful meal.',
      image: './image/Main/Lemongarlicbutter.jpeg'
    },
    { 
      name: 'Beef Stir-Fry (Chinese)',
      description: 'Thinly sliced beef cooked quickly with assorted vegetables like bell peppers, broccoli, carrots, and snap peas in a savory sauce made of soy sauce, garlic, ginger, and a touch of honey, served over steamed rice.',
      image: './image/Main/beef stirfry.png'
    },
    { 
      name: 'Spaghetti Carbonara (Italian)',
      description: 'Spaghetti pasta tossed with crispy pancetta or bacon, eggs, Parmesan cheese, garlic, and black pepper, creating a creamy and indulgent sauce.',
      image: './image/Main/carbonara.png'
    },
    { 
      name: 'Chicken Fajitas (Mexican)',
      description: 'Sliced chicken breast marinated in lime juice, garlic, and Mexican spices, cooked with bell peppers and onions, served with warm tortillas and toppings like salsa, sour cream, and guacamole.',
      image: './image/Main/fajita.png'
    },
    { 
      name: 'Laksa (Malaysian)',
      description: 'A beloved Southeast Asian noodle soup featuring a rich coconut milk broth . Served with shrimp and eggs .',
      image: './image/Main/Laksa.jpeg'
    }
  ];

  return (
    <div>
      <h2>Choose a Main Course</h2>
      {mainMenu.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p>{item.description}</p>
          <button onClick={() => onSelect(item.name)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default MainMenu;
