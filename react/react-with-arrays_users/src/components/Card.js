import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user, key }) {
  return (
    <article className="card" key={key}>
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        <Tag tag={user.roles} />
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
