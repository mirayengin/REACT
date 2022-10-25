import styled from 'styled-components';

const HeaderText = styled.header`
color:${({ color }) => color || "black"};
font-size:2.5rem;
padding:1rem;

`;

export default HeaderText;
