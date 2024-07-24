import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter(props) {
  // Schritt 1: Initialisiere den Zählerzustand
  const [count, setCount] = useState(0);
  console.log("Festgelegter Startwert ist:", count);
  // Schritt 2: Funktion zur Erhöhung des Zählers
  const incrementCount = () => {
    setCount(count + 1);
    console.log("Wert von Cout vor der Addition und dem Rerender: ", count);
  };

  // Schritt 2: Funktion zur Verringerung des Zählers
  const decrementCount = () => {
    setCount(count - 1);
    console.log("Wert von Cout vor der Subtraktion und dem Rerender: ", count);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>

      {/* Schritt 3: Übergib den aktuellen Zählerwert an ColoredNumber */}
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={incrementCount} // Schaltfläche zum Erhöhen
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrementCount} // Schaltfläche zum Verringern
        >
          -
        </button>
      </div>
    </div>
  );
}
