import React from 'react';

import StyledTheme from './StyledTheme';
import Sky from './components/Sky';
import DeathStar from './components/DeathStar';

const App = () => (
  <StyledTheme>
    <Sky starsCount={50}>
      <DeathStar>
        <DeathStar.Title>Alderaan</DeathStar.Title>
        <DeathStar.Label>Population: 200000</DeathStar.Label>
        <DeathStar.Label>Climate: Arid</DeathStar.Label>
        <DeathStar.Label>Terrain: Desert</DeathStar.Label>
        <DeathStar.Label>Featured in 5 movies</DeathStar.Label>
      </DeathStar>
    </Sky>
  </StyledTheme>
);

export default App;
