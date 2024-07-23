import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Neues Dokument</Button>
      <Button>Datei öffnen</Button>
      <Button>Help Menü</Button>
      <Button>Zurück nach oben</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
