import styled from 'styled-components';

const Card = styled.div`
  flex-direction:${({id}) => !(id % 2) && "row-reverse"};
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  width:65%;
  gap:7%;
  box-shadow:2px 2px 10px grey;
  border-radius:10px;
  padding:60px;
  margin-bottom:7%;

`;

export default Card;
