import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import restaurantLogo from '../logo.svg'; 

const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const HeroSection = styled.div`
  background-image: url(${restaurantLogo});
  background-size: cover;
  background-position: center;
  height: 350px; /* Adjust height for desktop */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 200px; /* Adjust height for mobile */
  }
`;

const WelcomeText = styled.p`
  font-size: 24px;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function HomePage() {
  return (
    <HomePageContainer>
      <HeroSection>
        <WelcomeText>Welcome to Our Restaurant!</WelcomeText>
        
      </HeroSection>
      <p>
        Dear Millie, we cordially invite you to Olu's Restaurant on the <b>2nd of April 2024</b> for an unforgettable evening of exquisite cuisine and culinary delights.
        Our renowned chef, Olu, is eager to showcase his culinary mastery, promising an experience that will tantalize your taste buds.
        You have been graciously invited to this dining extravaganza for several reasons:
        <br />
        1. To celebrate the spirit of friendly competition as your husband lost a bet.
        <br />
        2. To impress you with the artistry and innovation of our culinary creations.
        <br />
        3. To express our heartfelt gratitude for your unwavering patience and support
        <br /> during our journey of growth and learning over the past three months.
        <br />
        <br />
        Please click the button below to peruse our menu and pre-order your selections, ensuring a seamless dining experience tailored to your preferences.
      </p>
      <Link to="/menu">
          <Button>Explore Menu</Button>
        </Link>
    </HomePageContainer>
  );
}

export default HomePage;
