import "./Card.css";

export default function Card({ name, id }) {
  return (
    <p className="card" key={id}>
      {name}
    </p>
  );
}
