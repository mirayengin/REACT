import styled from 'styled-components';

export const Flex = styled.div`
  display:flex;
  justify-content:${({ justify }) => (justify ? justify : "center")};
  align-items:${({ aling }) => (aling ? aling : "center")};
  flex-wrap: ${({wrap}) => wrap && wrap};
`;


