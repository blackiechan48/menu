import React from 'react';

function Dessert({ onSelect }) {
  const desserts = [
    { 
      name: 'Chocolate covered strawberries',
      description: 'Fresh strawberries dipped in melted chocolate and chilled until the chocolate sets. These elegant and romantic treats are easy to make and perfect for sharing',
      image: './image/dessert/chocolate-covered-strawberries-.jpeg'
    },
    { 
      name: 'Classic Chocolate mousse ',
      description: 'A luxurious and creamy dessert made with rich dark chocolate, egg yolks, sugar, and whipped cream. Serve it chilled in elegant glasses and garnish with shaved chocolate or fresh berries for an indulgent treat.',
      image: './image/dessert/Chocolate-Mousse.jpeg'
    },
    { 
      name: 'Apple Crisp',
      description: 'Sliced apples tossed with cinnamon and sugar, topped with a crisp and buttery oat crumble, and baked until golden brown and bubbling. Served warm with a scoop of vanilla ice cream .',
      image: './image/dessert/apple-crisp.jpeg'
    },
    { 
      name: 'Coconut Mango Sticky Rice (Thai)',
      description: 'Sweet sticky rice cooked with coconut milk, served with fresh ripe mango slices and a drizzle of coconut sauce, offering a delightful blend of flavors and textures.',
      image: './image/dessert/coconut rice.webp'
    },
    { 
      name: 'Creme Brulee',
      description: 'Creamy vanilla custard topped with a caramelized sugar crust. This elegant French dessert is surprisingly simple to make and always impresses with its contrasting textures',
      image: './image/dessert/Creme-brulee.jpeg'
    }
  ];

  return (
    <div>
      <h2>Choose a Dessert</h2>
      {desserts.map((dessert, index) => (
        <div key={index}>
          <h3>{dessert.name}</h3>
          <img src={dessert.image} alt={dessert.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p>{dessert.description}</p>
          <button onClick={() => onSelect(dessert.name)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default Dessert;
