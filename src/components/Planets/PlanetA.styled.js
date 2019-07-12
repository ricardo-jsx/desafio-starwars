import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%    { transform: translateY(0) }
  50%   { transform: translateY(10px) }
  100%  { transform: translateY(0) }
`;

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  right: 300px;
  width: 120px;
  height: 120px;
  border: 12px solid black;
  border-radius: 50%;
  background: #0b7575;
  animation: ${float} 3s linear infinite;
  font-family: ${(props) => props.theme.fontFamily};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    top: -50px;
    left: 20px;
    background: rgba(67, 127, 127, 0.3);
    border-radius: 50%;
  }

  label {
    cursor: pointer;
    font-size: 24px;
  }
`;
