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
  animationDelay: PropTypes.oneOf(['0s', '1s', '2s']),
  leftPosition: PropTypes.number,
  topPosition: PropTypes.number,
};

Star.defaultProps = {
  animationDelay: '0s',
  leftPosition: 0,
  topPosition: 0,
};

export default Star;
