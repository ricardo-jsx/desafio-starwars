import React from 'react';
import { storiesOf } from '@storybook/react';

import Star from './Star';

const skyDecorator = (storyFn) => (
  <div style={{ backgroundColor: '#262626', width: '100vw', height: '100vh' }}>{storyFn()}</div>
);

storiesOf('Star', module)
  .addDecorator(skyDecorator)
  .add('default', () => <Star />);
// .add('with info', () => (
//   <DeathStar>
//     <DeathStar.Title>Tatooine</DeathStar.Title>
//     <DeathStar.Body>
//       <DeathStar.Label></DeathStar.Label>
//     </DeathStar.Body>
//   </DeathStar>
// ));
