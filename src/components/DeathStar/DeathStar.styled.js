import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%    { transform: translateY(0) }
  50%   { transform: translateY(-20px) }
  100%  { transform: translateY(0) }
`;

const spin = keyframes`
  0%    { transform: translateX(0) }
  100%   { transform: translateX(900px) }
`;

export const Container = styled.div`
  background: #d9d9d9;
  position: absolute;
  width: 600px;
  height: 600px;
  border: 16px solid black;
  border-radius: 50%;
  overflow: hidden;
  animation: ${float} 3s linear infinite;
  transform-origin: 50% 50%;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: normal;
  font-style: normal;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  &::before {
    content: '';
    background: #909090;
    position: absolute;
    width: 100%;
    height: 350px;
    top: 270px;
  }

  .trait {
    background: black;
    position: absolute;
    top: 256px;
    height: 16px;
    width: 100%;
  }

  .circle {
    background: #909090;
    position: relative;
    left: -120px;
    top: 10%;
    width: 120px;
    height: 120px;
    border: 8px solid black;
    border-radius: 50%;
    overflow: hidden;
    animation: ${spin} 10s linear infinite;

    &::after {
      content: '';
      background: #909090;
      display: block;
      border-radius: 50%;
      border: 8px solid black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 20%;
      width: 20%;
    }

    .line {
      position: absolute;
      height: 0;
      width: 100%;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 4px solid #686868;

      &.line1 {
        transform: rotate(45deg);
      }

      &.line2 {
        transform: rotate(-45deg);
      }

      &.line3 {
        transform: rotate(90deg);
      }
    }
  }
`;
