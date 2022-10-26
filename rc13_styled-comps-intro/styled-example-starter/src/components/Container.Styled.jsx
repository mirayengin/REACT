import styled, {css} from 'styled-components';

const Container = styled.div`
background: ${({bg}) => bg || "white"};
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 gap:0.5rem;
 



`;

export default Container;
