import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { GlobalStyle, Wrapper } from "./App.styled";
import Nav from "@components/organisms/Nav";

function App() {
  return (
      <Router>
        <GlobalStyle />
        <Wrapper>
          <Nav />
          <AppRoutes />
        </Wrapper>
      </Router>
  );
}

export default App;
