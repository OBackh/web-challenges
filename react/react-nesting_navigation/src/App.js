import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <main>
        <Header>
          <Nav></Nav>
        </Header>
        content goes here…
        <Link>Link 1</Link>
        <Link>Link 2</Link>
        <Logo className="round-image" src={logo} alt="logo"></Logo>
      </main>
    </>
  );
}
