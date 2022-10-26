import styled from 'styled-components';

const Header = styled.h1`
/* //? Burda color probunda bir renk varsa onu yap yoksa burdaki black i yap */
  color:${({ color }) => color || "back"};
  font-size:2.5rem;
  padding:1rem;
`;

export default Header;
