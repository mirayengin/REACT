import styled from "styled-components"

const Button = styled.button`
/* background-color: hotpink; */
background-color:${(props) => props.primary ? "red" : "green"};
/* color:${(props) => props.primary ? "white" : "red"}; */
color:${({primary}) => (primary ? "white" : "red")};
/* color:white; */
cursor:pointer;
width:7rem;
padding:1rem 2rem;
border-radius:0.5rem;
border-color:gold;
font-size:1.1rem;
font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
&:hover {
  transform: scale(0.97);
}
`;

export const TomatoButton = styled(Button)`
  background-color:${(props) => props.primary ? "black" : "white"};

color:${({ primary }) => (primary ? "tomato" : "white")};
border-color: cyan;


`


export default Button;