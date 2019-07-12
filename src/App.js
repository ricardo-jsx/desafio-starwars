import React from 'react';

import StyledTheme from './StyledTheme';
import Sky from './components/Sky';
import DeathStar from './components/DeathStar';
import { PlanetA } from './components/Planets';

import useSwapi from './hooks/useSwapi';

const App = () => {
  const { planet, loading, getNextPlanet } = useSwapi();

  return (
    <StyledTheme>
      <Sky starsCount={50}>
        <DeathStar>
          <DeathStar.Title>{planet.name}</DeathStar.Title>
          <DeathStar.Label>Population: {planet.population}</DeathStar.Label>
          <DeathStar.Label>Climate: {planet.climate}</DeathStar.Label>
          <DeathStar.Label>Terrain: {planet.terrain}</DeathStar.Label>
          <DeathStar.Label>Featured in {planet.films.length} movies</DeathStar.Label>
        </DeathStar>
        <PlanetA onClick={getNextPlanet}>
          <PlanetA.Label>Next</PlanetA.Label>
        </PlanetA>
      </Sky>
    </StyledTheme>
  );
};

export default App;
