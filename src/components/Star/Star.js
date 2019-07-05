import React from 'react';
import PropTypes from 'prop-types';

import { StarContainer } from './Star.styled';

const Star = (props) => (
  <StarContainer {...props}>
    <div className="circle circle-top circle-left" />
    <div className="circle circle-top circle-right" />
    <div className="circle circle-bottom circle-left" />
    <div className="circle circle-bottom circle-right" />
  </StarContainer>
);

Star.propTypes = {
  animationDelay: PropTypes.oneOf(['1s', '2s', '3s']),
  size: PropTypes.oneOf(['SMALL', 'MEDIUM', 'BIG']),
  left: PropTypes.number,
  right: PropTypes.number,
};

Star.defaultProps = {
  animationDelay: '1s',
  size: 'MEDIUM',
  left: 0,
  right: 0,
};

export default Star;
