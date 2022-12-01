import Header from "./components/Header";
import Styled from "./components/styled.css";
import { BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Styled />
    <Header />
    <h1>E-Dashboard</h1>
      </BrowserRouter>
  </div>
  );
}

export default App;
