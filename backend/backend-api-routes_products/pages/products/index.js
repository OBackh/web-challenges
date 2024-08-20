import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FetchProducts() {
  const { data, error } = useSWR(`/api/products`, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div style={{ backgroundColor: "red" }}>Loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}
