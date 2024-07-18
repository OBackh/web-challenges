import React from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="My React App" />
      <Main>
        <p>This is the main content of my application.</p>
      </Main>
      <Nav />
    </div>
  );
}

export default App;
