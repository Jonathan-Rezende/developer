import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyled from "../src/components/Header/index";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <BrowserRouter>
      <Header />
      <h1>Jonathan Rezende</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
