import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Ole" />
      <Greeting name="Andrea" />
    </div>
  );
}

function Greeting(props) {
  return <h1>Hello, {props.name === "Andrea" ? "Coach" : props.name}!</h1>;
}
