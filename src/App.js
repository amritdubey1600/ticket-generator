import { GlobalStyle } from "./Components/styled/Global";
import { ThemeProvider } from "styled-components";
import Home from "./Pages/Home";

const theme={
  colors:{
    orange500:"hsl(7, 88%, 67%)",
    orange700:"hsl(7, 71%, 60%)"
  }
};

function App() {
  return (
  <ThemeProvider theme={theme}>
    <>
        <GlobalStyle />
        <Home />
    </>
  </ThemeProvider>);
}

export default App;
