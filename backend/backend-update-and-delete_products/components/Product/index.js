import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";
import { useState } from "react";
import { StyledButton } from "../Button/Button.styled";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditProduct(productData) {
    console.log("id:", id);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate(); // Aktualisiere die Produktdetails nach dem Editieren
      setIsEditMode(false); // Schalte den Bearbeitungsmodus aus
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <ProductForm onSubmit={handleEditProduct} heading="Edit Fish" />
      ) : (
        <>
          <StyledLink href="/">Back to all</StyledLink>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
          <StyledDiv>
            <StyledButton
              type="button"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              {isEditMode ? "Cancel" : "Edit"}
            </StyledButton>
          </StyledDiv>
        </>
      )}
    </ProductCard>
  );
}
