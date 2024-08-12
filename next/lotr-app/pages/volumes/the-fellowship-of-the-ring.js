import { volumes } from "../lib/data";

export default function theFellowshipOfTheRings() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <div>
      <a href="../">← All Volumes</a>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <h2>Books:</h2>
      <ul>
        {volume.books.map((book, index) => (
          <>
            <li key={book.ordinal}>
              <strong>{book.ordinal}</strong>: {book.title}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
theFellowshipOfTheRings();
