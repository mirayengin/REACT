import styled, { css } from 'styled-components';

const StyledLink = styled.a`
  font-size:1rem;
  text-decoration:none;
  :hover {
    opacity:0.6;
  }


  /* //! css import edilip sonra css yazıp içine yazılan herşey props içindeki secondary özelliklerini bütün proje içindeki secondary lere uygular. */
  ${(props) => props.secondary && css`
  background: lightblue;
  color:crimsom;
  padding: 0.4rem;
 `}
`;

export default StyledLink;
