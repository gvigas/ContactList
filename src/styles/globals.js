import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Sora', sans-serif;

body{
  background-color: ${(props) => {
    return props.theme.colors.background;
  }};
  font-family: 'Sora', sans-serif;
  color: #222222;
}

button{
  cursor: pointer;
}
`;
