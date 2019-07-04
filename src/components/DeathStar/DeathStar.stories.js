import React from 'react';
import { storiesOf } from '@storybook/react';

import DeathStar from './DeathStar';

storiesOf('Death Star', module).add('default', () => <DeathStar />);
// .add('with info', () => (
//   <DeathStar>
//     <DeathStar.Title>Tatooine</DeathStar.Title>
//     <DeathStar.Body>
//       <DeathStar.Label></DeathStar.Label>
//     </DeathStar.Body>
//   </DeathStar>
// ));
