import styled, { keyframes } from 'styled-components';

// export const pulse = keyframes`
//   0%    { transform: scale(1) }
//   50%   { transform: scale(0.8) }
//   100%  { transform: scale(1) }
// `;

export const StarContainer = styled.div`
  background: #757f95;
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;

  .circle {
    height: 32px;
    width: 32px;
    position: absolute;
    background: #262626;
    border-radius: 50%;

    &.circle-top {
      top: -50%;
    }

    &.circle-bottom {
      bottom: -50%;
    }

    &.circle-left {
      left: -50%;
    }

    &.circle-right {
      right: -50%;
    }
  }
`;
