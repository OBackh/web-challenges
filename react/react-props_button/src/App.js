import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      color="#aa0000"
      tcolor="#00ff00"
      disabled={false}
      text="Button-Text"
      onClick={handleClick}
    />
  );
}

function Button({ color, tcolor, disabled, text }) {
  return (
    <button
      onClick={handleClick}
      /*onClick={() => alert("You clicked me!")}*/
      style={{
        backgroundColor: color,
        color: tcolor,
        height: "100px",
        width: "150px",
        fontSize: "1.5rem",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

function handleClick() {
  console.log("Thanks for your CLICK !!");
}
