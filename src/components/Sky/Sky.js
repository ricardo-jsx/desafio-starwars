import React from 'react';
import PropTypes from 'prop-types';

import { SkyContainer } from './Sky.styled';
import Star from '../Star';

import useStars from '../../hooks/useStars';

const Sky = ({ starsCount, widthSize, heightSize }) => {
  const stars = useStars(starsCount, [0, widthSize], [0, heightSize]);

  return (
    <SkyContainer widthSize={widthSize} heightSize={heightSize}>
      {stars.map((star) => (
        <Star {...star} />
      ))}
    </SkyContainer>
  );
};

Sky.propTypes = {
  starsCount: PropTypes.number.isRequired,
  widthSize: PropTypes.number,
  heightSize: PropTypes.number,
};

Sky.defaultProps = {
  widthSize: 1000,
  heightSize: 500,
};

export default Sky;
