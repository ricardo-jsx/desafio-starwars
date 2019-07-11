import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%    { transform: translateY(0) }
  50%   { transform: translateY(-20px) }
  100%  { transform: translateY(0) }
`;

export const Container = styled.div`
  background: ${(props) => props.theme.lightColor};
  position: relative;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  overflow: hidden;
  animation: ${float} 3s linear infinite;
  transform-origin: 50% 50%;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: normal;
  font-style: normal;
`;

export const BodyShadow = styled.div`
  background: ${(props) => props.theme.darkColor};
  position: absolute;
  width: 760px;
  height: 800px;
  border-radius: 50%;
  right: 150px;
  transform: rotate(-120deg);
`;

export const Circle = styled.div`
  background: ${(props) => props.theme.darkColor};
  position: absolute;
  right: 80px;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  &::after {
    content: '';
    display: block;
    background: ${(props) => props.theme.lightColor};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 20%;
    width: 20%;
  }
`;

const Trait = styled.div`
  position: absolute;
  top: 200px;
  height: 8px;
`;

export const LeftTrait = styled(Trait)`
  background: ${(props) => props.theme.lightColor};
  width: 100%;
`;

export const RightTrait = styled(Trait)`
  background: ${(props) => props.theme.darkColor};
  right: 0;
  width: 181px;
`;
