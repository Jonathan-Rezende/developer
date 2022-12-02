import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import { GlobalStyle }  from "./styles";

function App() {
  return (
      <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      </BrowserRouter>
  );
}

export default App;
