import Link from "next/link";
import { volumes } from "./lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>The Lord of the rings</h1>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>

            <ul>
              {volume.books.map((book, index) => (
                <>
                  <li key={book.ordinal}>
                    <strong>{book.ordinal}</strong>: {book.title}
                  </li>
                </>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
