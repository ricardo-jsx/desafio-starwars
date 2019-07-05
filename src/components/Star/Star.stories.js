import React from 'react';
import { storiesOf } from '@storybook/react';

import Star from './Star';

const skyDecorator = (storyFn) => (
  <div style={{ backgroundColor: '#262626', width: '100vw', height: '100vh' }}>{storyFn()}</div>
);

storiesOf('Star', module)
  .addDecorator(skyDecorator)
  .add('default', () => <Star />)
  .add('with custom position', () => (
    <React.Fragment>
      <Star animationDelay="1s" leftPosition="20" topPosition="50" />
      <Star animationDelay="0s" leftPosition="200" topPosition="500" />
      <Star animationDelay="1s" leftPosition="150" topPosition="250" />
      <Star animationDelay="2s" leftPosition="0" topPosition="80" />
      <Star animationDelay="1s" leftPosition="80" topPosition="320" />
      <Star animationDelay="0s" leftPosition="420" topPosition="150" />
      <Star animationDelay="1s" leftPosition="800" topPosition="800" />
      <Star animationDelay="0s" leftPosition="10" topPosition="240" />
    </React.Fragment>
  ));
