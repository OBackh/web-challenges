import React from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Bookmarks", href: "/bookmarks" },
    { name: "Add new Card", href: "/newCard" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <div className="App">
      <Header title="Meine Quiz-App" />
      <Main
        content={
          <p className="text-main">
            This is the main content of my application.
          </p>
        }
      />
      <Nav navItems={navItems} />
    </div>
  );
}

export default App;
