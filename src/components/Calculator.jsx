// src/components/Calculator.jsx
import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { Link } from "react-router-dom";

const Calculator = () => {
  const { addNumber, currentNumber, numbers } = useContext(CalculatorContext);

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      <div className="display">
        <p>Números seleccionados: {numbers.join(" + ")}</p>
        <p>Número actual: {currentNumber}</p>
      </div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => addNumber(number)}>
            {number}
          </button>
        ))}
      </div>
      <Link to="/resultado" className="result-link">
        Ver resultado
      </Link>
    </div>
  );
};

export default Calculator;