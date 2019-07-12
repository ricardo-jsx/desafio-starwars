import React from 'react';

import { DeathStarContainer, MovieContainer } from './DeathStar.styled';

const DeathStar = ({ children }) => (
  <DeathStarContainer>
    <div className="circle">
      <div className="line line1" />
      <div className="line line2" />
      <div className="line line3" />
      <div className="line line4" />
    </div>
    <div className="trait" />
    <MovieContainer>{children}</MovieContainer>
  </DeathStarContainer>
);

DeathStar.Title = ({ children }) => <h1>{children}</h1>;
DeathStar.Label = ({ children }) => <label>{children}</label>;

export default DeathStar;
