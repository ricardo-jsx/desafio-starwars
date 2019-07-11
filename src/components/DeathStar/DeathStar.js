import React from 'react';

import { Container } from './DeathStar.styled';

const DeathStar = () => (
  <Container>
    <div className="circle">
      <div className="line line1" />
      <div className="line line2" />
      <div className="line line3" />
      <div className="line line4" />
    </div>
    <div className="trait" />
  </Container>
);

export default DeathStar;
