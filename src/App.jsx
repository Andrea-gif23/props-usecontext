import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <Router>
      <CalculatorProvider>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/resultado" element={<Result />} />
        </Routes>
      </CalculatorProvider>
    </Router>
  );
}

export default App;