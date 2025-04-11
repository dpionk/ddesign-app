import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { GlobalStyle, Wrapper } from "./App.styled";
import Nav from "./components/organisms/Nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Nav />
        <Router>
          <AppRoutes />
        </Router>
      </Wrapper>
    </>
  );
}

export default App;
