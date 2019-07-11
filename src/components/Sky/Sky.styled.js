import styled from 'styled-components';

export const SkyContainer = styled.div`
  background: ${(props) => props.theme.darkColor};
  width: ${(props) => props.widthSize + 'px'};
  height: ${(props) => props.heightSize + 'px'};
  overflow: hidden;
`;
