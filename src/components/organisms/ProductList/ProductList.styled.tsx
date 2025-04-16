import styled from "styled-components";

export const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(autofill, 1fr);
  gap: 16px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
  
