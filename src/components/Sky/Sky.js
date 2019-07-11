import React from 'react';
import PropTypes from 'prop-types';

import { SkyContainer } from './Sky.styled';
import Star from '../Star';

import useStars from '../../hooks/useStars';

const Sky = ({ children, starsCount, widthSize, heightSize }) => {
  const stars = useStars(starsCount, [0, widthSize], [0, heightSize]);

  return (
    <SkyContainer widthSize={widthSize} heightSize={heightSize}>
      {stars.map((star) => (
        <Star {...star} />
      ))}
      {children}
    </SkyContainer>
  );
};

Sky.propTypes = {
  children: PropTypes.node,
  starsCount: PropTypes.number.isRequired,
  widthSize: PropTypes.number,
  heightSize: PropTypes.number,
};

Sky.defaultProps = {
  children: null,
  widthSize: window.innerWidth,
  heightSize: window.innerHeight,
};

export default Sky;
