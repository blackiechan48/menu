// MenuOptions.js
import React, { useState } from 'react';
import Starters from './Menu/Starter';
import MainMenu from './Menu/MainMenu';
import Dessert from './Menu/Dessert';
import Drink from './Menu/Drinks';
import FoodCard from './Menu/FoodCard';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

function MenuOptions() {
  const [selectedStarter, setSelectedStarter] = useState(null);
  const [selectedMainMenu, setSelectedMainMenu] = useState(null);
  const [selectedDessert, setSelectedDessert] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [stage, setStage] = useState('starter');

  const handleStarterSelect = (item) => {
    setSelectedStarter(item);
    setStage('main');
  };

  const handleMainMenuSelect = (item) => {
    setSelectedMainMenu(item);
    setStage('dessert');
  };

  const handleDessertSelect = (item) => {
    setSelectedDessert(item);
    setStage('drink');
  };

  const handleDrinkSelect = (item) => {
    setSelectedDrink(item);
    setStage('submit');
  };

  return (
    <MenuContainer>
      <h1>Menu</h1>
      <h3>Please take a screenshot of your order and whatsapp it to the chef</h3>
      {stage === 'starter' && <Starters onSelect={handleStarterSelect} />}
      {stage === 'main' && <MainMenu onSelect={handleMainMenuSelect} />}
      {stage === 'dessert' && <Dessert onSelect={handleDessertSelect} />}
      {stage === 'drink' && <Drink onSelect={handleDrinkSelect} />}
      {stage === 'submit' && (
        <div>
          <p>Your selections:</p>
          <FoodCard name={selectedStarter} description="Starter" />
          <FoodCard name={selectedMainMenu} description="Main Course" />
          <FoodCard name={selectedDessert} description="Dessert" />
          <FoodCard name={selectedDrink} description="Drink" />
        </div>
      )}
    </MenuContainer>
  );
}

export default MenuOptions;
