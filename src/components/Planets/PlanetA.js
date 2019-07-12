import React from 'react';

import { Container } from './PlanetA.styled';

const PlanetA = ({ children, ...props }) => <Container {...props}>{children}</Container>;

PlanetA.Label = ({ children }) => <label>{children}</label>;

export default PlanetA;
