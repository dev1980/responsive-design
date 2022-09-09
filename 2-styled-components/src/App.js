import {Button, Heading1, ButtonLarge} from "./components/styled/Button"
import Container from "./components/Container";
import {ThemeProvider} from 'styled-components'
import GlobalStyle from "./components/GlobalStyle";
function App() {
  const theme = {
    colors: {
     TextColor: "white",
      bg: "steelblue",
      bg1:"orange",
      size: "20px"
    },

   
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Container>
      <Heading1>This is a heading1</Heading1>
      <Button colorText="red" bg="orange">click Here</Button>
      <Button colorText="blue" bg="lightgray">click Here Again</Button>

      <p>some text</p>

      <ButtonLarge>Nice Place to visit</ButtonLarge>
      <ButtonLarge>Nice Place to visit</ButtonLarge>
 
      </Container>
</div>
</ThemeProvider>
  );
}

export default App;
