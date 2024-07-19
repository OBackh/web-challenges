import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={1} valueB={2} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return <div>{valueA + valueB}</div>;
}
