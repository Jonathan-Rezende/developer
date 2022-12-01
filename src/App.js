import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle }  from "./styles";

function App() {
  return (
      <BrowserRouter>
      <GlobalStyle />
      <Header />
      <h1>Jonathan Rezende</h1>
      </BrowserRouter>
  );
}

export default App;
