import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../../styles/globals.js";
import { Container } from "./style.js";
import themes from "../../styles/themes/defaultThemes.js";
import Header from "../Header/";

import Routes from "../Routes/";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <GlobalStyle />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
