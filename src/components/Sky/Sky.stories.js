import React from 'react';
import { storiesOf } from '@storybook/react';

import Sky from './Sky';

storiesOf('Sky', module)
  .add('empty', () => <Sky starsCount={0} />)
  .add('with stars', () => <Sky starsCount={50} />);
