import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
  0%    { transform: scale(1) }
  50%   { transform: scale(0.8) }
  100%  { transform: scale(1) }
`;

export const StarContainer = styled.div`
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom: 14px solid #f6ae2d;
  position: relative;
  top: ${(props) => props.topPosition + 'px'};
  left: ${(props) => props.leftPosition + 'px'};
  animation: ${pulse} 2s linear infinite;
  animation-delay: ${(props) => props.animationDelay};

  &::after {
    content: '';
    position: absolute;
    left: -10px;
    top: 14px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 14px solid #f6ae2d;
  }
`;
