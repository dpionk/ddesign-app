import { GlobalStyle, Wrapper } from "./App.styled";
import Nav from "./components/organisms/Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Nav />
      </Wrapper>
    </>
  );
}

export default App;
