import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { Link } from "react-router-dom";

const Result = () => {
  const { numbers, calculateSum, resetCalculator } = useContext(CalculatorContext);

  return (
    <div className="result">
      <h2>Resultado</h2>
      <p>Números seleccionados: {numbers.join(", ")}</p>
      <p>Suma total: {calculateSum()}</p>
      <button onClick={resetCalculator}>Resetear</button>
      <Link to="/">Volver a la calculadora</Link>
    </div>
  );
};

export default Result;