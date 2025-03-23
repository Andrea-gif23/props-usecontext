// src/context/CalculatorContext.jsx
import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]); // Lista de números seleccionados
  const [currentNumber, setCurrentNumber] = useState(""); // Número actual

  // Función para agregar un número a la lista
  const addNumber = (number) => {
    setNumbers([...numbers, number]);
    setCurrentNumber(number);
  };

  // Función para resetear la calculadora
  const resetCalculator = () => {
    setNumbers([]);
    setCurrentNumber("");
  };

  // Función para calcular la suma
  const calculateSum = () => {
    return numbers.reduce((acc, num) => acc + num, 0);
  };

  return (
    <CalculatorContext.Provider
      value={{ numbers, currentNumber, addNumber, resetCalculator, calculateSum }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};