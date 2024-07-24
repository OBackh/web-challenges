import Card from "./components/Card";
import "./styles.css";

//Das ist mein Datensatz (der auch viel größer sein könnte)!!
const fruits = [
  { id: 150, name: "🍌 Banana", color: "yellow" },
  { id: 160, name: "🍏 Apple", color: "green" },
  { id: 170, name: "🍊 Orange", color: "orange" },
  { id: 180, name: "🥝 Kiwi", color: "brown" },
  { id: 190, name: "🍒 Cherry", color: "red" },
];

//Das ist meine Hauptfunktion
function App() {
  return (
    <div>
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}

//Hier erfolgt der Aufruf der Funktion
export default App;
