import React from 'react';

import { Container, DeathStarContainer, MovieContainer } from './DeathStar.styled';

const DeathStar = ({ children }) => (
  <Container>
    <DeathStarContainer>
      <div className="circle">
        <div className="line line1" />
        <div className="line line2" />
        <div className="line line3" />
        <div className="line line4" />
      </div>
      <div className="trait" />
    </DeathStarContainer>
    <MovieContainer>{children}</MovieContainer>
  </Container>
);

DeathStar.Title = ({ children }) => <h1>{children}</h1>;
DeathStar.Label = ({ children }) => <label>{children}</label>;

export default DeathStar;
