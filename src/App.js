import React from 'react';

import StyledTheme from './StyledTheme';
import Sky from './components/Sky';
import DeathStar from './components/DeathStar';

const App = () => (
  <StyledTheme>
    <Sky starsCount={30}>
      <DeathStar />
    </Sky>
  </StyledTheme>
);

export default App;
