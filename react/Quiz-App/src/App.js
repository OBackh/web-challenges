import React from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="App">
      <Header title="Meine Quiz-App" navItems={navItems} />
      <Main content={<p>This is the main content of my application.</p>} />
      <Nav navItems={navItems} />
    </div>
  );
}

export default App;
