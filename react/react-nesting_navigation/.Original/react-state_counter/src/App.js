import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setNumber] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        {/* Minus Button */}
        <button
          type="button"
          onClick={() => {
            setNumber(count - 1);
            console.log("🤔", count);
          }}
        >
          -{/* Plus Button */}
        </button>
        <button
          type="button"
          onClick={() => {
            setNumber(count + 1);
            console.log("🤔", count);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
