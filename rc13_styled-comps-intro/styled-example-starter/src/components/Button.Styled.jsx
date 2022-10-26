import styled from "styled-components"

export const Button = styled.button`
  background-color:${(props) => (props.primary ? "white" : "purple")};
  /* color:white; */
  /* color:${(props) => (props.primary ? "purple" : "white")}; */
  /* //! Alttakinde havada props un özelliği primary i descruct ettik  */
  color:${({primary}) => (primary ? "purple" : "white")};
  cursor:pointer;
  width: 7rem;
  padding:1rem 2rem;
  border-radius:0.5rem;
  border-color:purple;
  font-family:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(0.97);
  }
`;


// ! Buttondan onun styled özelliklrini taşıyan bir buton oluşturduk.Başka still istiyorsak yine yazıyoruz bunun altına
export const TomatoButton = styled(Button)`
  background-color:${({primary}) => (primary ? "white" : "tomato")};
  color:${({ primary }) => (primary ? "tomato" : "white")};
  border: 1px solid tomato;

`

